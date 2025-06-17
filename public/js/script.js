let currentIndex = 1; // Começamos no primeiro "real", pois vamos clonar as bordas
  const carouselInner = document.getElementById('carouselInner');
  const slides = document.querySelectorAll('.carousel-item');

  const totalSlides = slides.length;

  // Clone o primeiro e o último slide
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  // Adiciona os clones
  carouselInner.appendChild(firstClone);
  carouselInner.insertBefore(lastClone, slides[0]);

  // Atualiza largura do carousel-inner
  carouselInner.style.width = `${(totalSlides + 2) * 100}%`;

  // Coloca no primeiro slide real
  carouselInner.style.transform = `translateX(-100%)`;

  function showSlide(index) {
    currentIndex = index;
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    if (currentIndex >= totalSlides + 1) return;
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    if (currentIndex <= 0) return;
    showSlide(currentIndex - 1);
  }

  carouselInner.addEventListener('transitionend', () => {
    if (carouselInner.children[currentIndex].id === "first-clone") {
      // Quando chega no clone do primeiro, salta sem animação para o primeiro real
      carouselInner.style.transition = 'none';
      currentIndex = 1;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (carouselInner.children[currentIndex].id === "last-clone") {
      // Quando chega no clone do último, salta para o último real
      carouselInner.style.transition = 'none';
      currentIndex = totalSlides;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

   const itens = [];
    let total = 0;

    function adicionarCarrinho(nome, preco) {
      itens.push({ nome, preco });
      total += preco;
      atualizarCarrinho();
    }

    function atualizarCarrinho() {
      const lista = document.getElementById("itens");
      lista.innerHTML = "";
      itens.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
      });
      document.getElementById("total").textContent = total.toFixed(2);
    }

    document.getElementById("finalizar-pix").addEventListener("click", () => {
      if (total === 0) {
        alert("Adicione produtos ao carrinho antes de finalizar.");
        return;
      }

      const chavePix = "12988191026";
      const nomeRecebedor = "Mateus Gomes";
      const cidade = "ILHABELA";
      const valor = total.toFixed(2);
      const descricao = "Pagamento de produtos";

      const payload = _pix.Pix(chavePix, nomeRecebedor, cidade, valor, descricao);
      const qrCodeDataUrl = _pix.Pix(chavePix, nomeRecebedor, cidade, valor, descricao, true);

      const qrcodeDiv = document.getElementById("qrcode-pix");
      qrcodeDiv.innerHTML = "";

      const img = document.createElement("img");
      img.src = qrCodeDataUrl;
      qrcodeDiv.appendChild(img);

      const copia = document.createElement("textarea");
      copia.value = payload;
      copia.readOnly = true;
      copia.style.width = "100%";
      copia.style.height = "50px";
      copia.style.marginTop = "10px";
      qrcodeDiv.appendChild(document.createTextNode("\nCódigo Copia e Cola:\n"));
      qrcodeDiv.appendChild(copia);
    });

  // Roda automático
  setInterval(() => {
    nextSlide();
  }, 4000);
