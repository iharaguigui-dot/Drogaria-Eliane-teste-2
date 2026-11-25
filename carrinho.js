/* Página do Carrinho: lista, quantidades e finalizar compra */
function renderCart(){
  var c=getCart(),tot=0;c.forEach(function(i){tot+=i.q*i.p});
  document.getElementById('cartTotal').textContent=money(tot);
  document.getElementById('cartList').innerHTML=c.length?c.map(function(i,k){return '<div class="crow"><span class="ic">'+i.ic+'</span><b>'+i.n+'</b><span class="q"><button data-a="dec" data-k="'+k+'">−</button>'+i.q+'<button data-a="inc" data-k="'+k+'">+</button></span><span class="tot">'+money(i.q*i.p)+'</span><button class="del" data-a="del" data-k="'+k+'">Remover</button></div>'}).join(''):'<div class="empty">Seu carrinho está vazio.</div>';
}
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-a]');if(!b)return;
  var c=getCart(),k=+b.dataset.k,a=b.dataset.a;
  if(a==='inc')c[k].q++;else if(a==='dec'){c[k].q--;if(c[k].q<1)c.splice(k,1)}else c.splice(k,1);
  saveCart(c);
});
document.getElementById('checkout').onclick=function(){toast(getCart().length?'Compra enviada (demonstração)':'Carrinho vazio')};
render();
