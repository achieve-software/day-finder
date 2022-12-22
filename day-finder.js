console.log("..............DAY FİNDER PROGRAM...............");

const day = prompt(
  "Lütfen bulmak istediğiniz günün sayısını (1-7 arasında) giriniz..."
);

let sonuc = "";

switch (day) {
  case "1":
    sonuc = "Pazartesi";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "2":
    sonuc = "Salı";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "3":
    sonuc = "Çarşamba";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "4":
    sonuc = "Perşembe";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "5":
    sonuc = "Cuma";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "6":
    sonuc = "Cumartesi";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;

  case "7":
    sonuc = "Pazar";
    console.log("girdiğiniz sayıya karşılık gelen gün " + sonuc);
    break;
  default:
    alert("yanlış sayı girişi");
    break;
}
