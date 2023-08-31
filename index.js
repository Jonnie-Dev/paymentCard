function moveToNext(currentInput, nextInputId) {
  const maxLength = parseInt(currentInput.getAttribute("maxlength"));
  const currentLength = currentInput.value.length;

  if (currentLength >= maxLength) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

const input = document.querySelectorAll(".num-input");

[...input].map((el) =>
  el.addEventListener("input", function () {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  })
);

const cardLogo = document.querySelector(".card-logo");
const visa = `<svg width="47" height="15" viewBox="0 0 47 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_203_19)">
<path d="M30.6128 0.01828C27.2756 0.01828 24.2934 1.71792 24.2934 4.85813C24.2934 8.45933 29.5825 8.70803 29.5825 10.5172C29.5825 11.2789 28.6941 11.9609 27.1767 11.9609C25.0232 11.9609 23.4137 11.008 23.4137 11.008L22.725 14.1769C22.725 14.1769 24.5791 14.9817 27.0408 14.9817C30.6894 14.9817 33.5604 13.1986 33.5604 10.0047C33.5604 6.1994 28.2493 5.95804 28.2493 4.27888C28.2493 3.68207 28.9785 3.02826 30.4916 3.02826C32.1988 3.02826 33.5916 3.72123 33.5916 3.72123L34.2656 0.660717C34.2656 0.660717 32.7501 0.01828 30.6128 0.01828ZM0.0808268 0.249284L0 0.711245C0 0.711245 1.40398 0.963699 2.66846 1.46736C4.29657 2.04484 4.41259 2.38106 4.68678 3.42527L7.67474 14.7435H11.6802L17.8509 0.249284H13.8546L9.88962 10.1039L8.27167 1.75065C8.12328 0.794641 7.37166 0.249284 6.45166 0.249284H0.0808268ZM19.4579 0.249284L16.3229 14.7434H20.1337L23.2576 0.249238H19.4579V0.249284ZM40.7118 0.249284C39.7929 0.249284 39.306 0.732695 38.9487 1.57743L33.3657 14.7434H37.362L38.1352 12.5491H43.0037L43.4739 14.7434H47L43.9238 0.249284H40.7118ZM41.2315 4.16516L42.4161 9.60408H39.2426L41.2315 4.16516Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_203_19">
<rect width="47" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`;

cardLogo.innerHTML = visa;

const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");
const currentYear = new Date().getFullYear();
const startYear = 2020;
const endYear = currentYear + 10;

for (let month = 1; month <= 12; month++) {
  const option = document.createElement("option");
  option.value = `${month < 10 ? 0 : ""}${month}`;
  option.textContent = `${month < 10 ? 0 : ""}${month}`;
  monthSelect.appendChild(option);
}

for (let year = startYear; year <= endYear; year++) {
  const option = document.createElement("option");
  option.value = (year + "").slice(2, 4);
  option.textContent = year;
  yearSelect.appendChild(option);
}
