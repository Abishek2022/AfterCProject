const mainManage = document.getElementById("manage");
const Itmana = document.getElementById("ItMan");
const bbsa = document.getElementById("bbs");
const bba = document.getElementById("bba");
const bpa = document.getElementById("bpa");
const bbm = document.getElementById("bbm");
const bim = document.getElementById("bim");

const managem=[
document.getElementById("mba"),
document.getElementById(" mbm"),
document.getElementById("mbs"),
document.getElementById("mfc"),
document.getElementById("mpa"),
document.getElementById("mpm,"),
document.getElementById("mps"),
document.getElementById("mppa")
];







mainManage.addEventListener("mouseenter", () => {
    bbs.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    bba.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    bpa.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    bbm.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mba.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mbm.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mbs.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mfc.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mpa.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mps.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
    mpm.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class
   mppa.classList.replace("bg-purple-700", "bg-purple-900","shadow-gray-500","shadow-md",); // Change class



});

mainManage.addEventListener("mouseleave", () => {
    bbs.classList.replace("bg-purple-900", "bg-purple-700"); // Revert class
    bba.classList.replace("bg-purple-900", "bg-purple-700"); // Revert class
    bpa.classList.replace("bg-purple-900", "bg-purple-700"); // Revert class
    bbm.classList.replace("bg-purple-900", "bg-purple-700"); // Revert class
    mba.classList.replace("bg-purple-900", "bg-purple-700"); //revert class
    mbm.classList.replace("bg-purple-900", "bg-purple-700"); //revert class
    mbs.classList.replace("bg-purple-900", "bg-purple-700"); //revert class
    mfc.classList.replace("bg-purple-900", "bg-purple-700"); //revert class
    mpa.classList.replace("bg-purple-900", "bg-purple-700"); //revert class
    mpm.classList.replace("bg-purple-900", "bg-purple-700"); //revert class


});
Itmana.addEventListener("mouseenter", () => {
  bim.classList.replace("bg-red-500", "bg-red-900","shadow-gray-500","shadow-md",); // Change class
   
});
Itmana.addEventListener("mouseleave", () => {
   bim.classList.replace("bg-red-900", "bg-red-500"); // Revert class
  
});
