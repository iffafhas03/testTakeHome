//TEST CASE 1
//buka halaman tokped
//input kota asal
//input[@class='css-dlo3vd']
//input[@class='css-22hwsp']
//Bandung(BD)
//input kota tujuan
//input tanggal berangkat
//input checkbox pulang
//click cari tiket
//--> //button[@class='button css-d41a3e-unf-btn eg8apji0']
//Success result page
//--> //div[contains(text(),"Pilih tiket berangkat ")]

describe("I success result page", () => {
  it("login with valid data", async () => {
    //BUKA URL
    await browser.url("https://tiket.tokopedia.com/kereta-api/");
    await browser.pause(1);
    //input kota asal
    //await $("#css-22hwsp").click();
    //console.log($("//li[@class='heading']").getText() + " - is the text.")
    //check value dulu
    (await $("//input[@class='css-22hwsp']").getValue()) + "Gambir (GMR)";
    await $("//input[@class='css-22hwsp']").click();

    //CLICK CARI TICKER
    await $("//button[@class='button css-d41a3e-unf-btn eg8apji0']").click();

    //Success result page
    let resultTitle = await $(
      '//div[contains(text(),"Pilih tiket berangkat ")]'
    );
    await expect(resultTitle).toBeExisting();
  });
});
