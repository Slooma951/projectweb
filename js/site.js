(() => {
  const modal = document.querySelector(".cv-modal");
  const openButtons = document.querySelectorAll("[data-open-cv]");
  const closeButtons = document.querySelectorAll("[data-close-cv]");

  if (!modal) {
    return;
  }

  const openModal = () => {
    if (typeof modal.showModal === "function") {
      modal.showModal();
      return;
    }

    window.location.href = "pdf/SalemElatrashCV.pdf";
  };

  const closeModal = () => {
    if (modal.open) {
      modal.close();
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
})();
