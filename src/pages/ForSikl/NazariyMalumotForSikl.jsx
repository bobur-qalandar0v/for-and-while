import React from "react";

function NazariyMalumot() {
  return (
    <div className="container">
      <div className="nazariy-malumot">
        <div className="nazariy-malumot__wrap">
          <h1 className="nazariy-malumot__title">For sikl operatori</h1>

          <p className="nazariy-malumot__subtitle">
            Galdagi mavzuda sizlarni takrorlash operatorlari haqida tanishtirib
            o’taman va shu bilan birgalikda For Loop operatorini ham ishlash
            sintaksisini ya'ni qanday ishlashini ko’rsataman
          </p>

          <p className="nazariy-malumot__bigsubtitle">
            Umuman olganda kod yozayotganingizda bir xil hisoblash jarayonini
            qayta qayta yozish qimmatli vaqtingizni o'g'irlab sizni bezor
            qilishi mumkin, masalan siz “Salom, Dunyo!” jumlasini 100 marta
            yozishingiz zarur bo’lib qoldi. Siz uni qayta qayta yozib chiqgan
            bo’larmidingiz, yo’q albatta. Bu dasturchining asabini buzib,
            ko'ziga baloday ko'rsatib qo'yishi aniq. Aynan ushbu muammoning
            oldini olish uchun takrorlash operatorlari ishlab chiqilgan, ya’ni
            siz ta’kidlab o’tilgan jumlani bir necha qator kod bilan nafaqat 100
            marta balkim googel marta ham yozishingiz mumkin. Googel bu eng
            katta son bo’lib, siz unga 1 soni qo’shsangiz, aynan ushbu sonni
            googel o’zlashtiradi. Siz o’zingiz uchun ulardan o’zingizga qulay
            bo’lganini tanlab olishingiz mumkin.
          </p>

          <p className="nazariy-malumot__content">
            Takrorlash operatorining C# da 4 xil turi mavjud:
          </p>

          <ul>
            <li>For</li>
            <li>While</li>
            <li>Do-while</li>
            <li>foreach</li>
          </ul>

          <p>
            foreach dan tashqari barcha operatorlar bir xil vazifani bajaradi,
            farqi ularning sintaksisida hisoblanadi, foreach ni ham albatta
            ko’rib o’tamiz
          </p>

          <p>Keling endi For takrorlash operatori bilan tanishib chiqamiz:</p>

          <p>For loop (operatorining) ishlash prinsipi quyidagicha</p>

          <p>
            for (o’zgaruvchi ; munosabat amallari ; postfiks) Operator yoki
            blok; (yoki sikl tanasi)
          </p>

          <p>
            Bu operator eng birinchi o’zgaruvchidan ishni boshlaydi, undan so’ng
            munosabat amallarini tekshiradi, har bir takrorlanish mobaynida u
            munosabat amallariga murojaat qiladi, agar munosabatlar to’g’ri
            bo’lsa operator yoki blokni bajaradi, postfiks esa undan so’ng
            bajariladi, agar noto’g’ri qiymatni olsa dasturimiz undan keyingi
            ya’ni operatorimizdan keyingi amallarni bajaradi yoki boshqa amallar
            yo’q bo’lsa, u to’xtaydi.
          </p>

          <p>Masala: 1 dan 10 gacha bo’lgan sonlarni ko’rib chiqamiz:</p>

          <img src="/image1.png" alt="error" />

          <p>
            Bu operator eng birinchi o’zgaruvchidan ishni boshlaydi, undan so’ng
            munosabat amallarini tekshiradi, har bir takrorlanish mobaynida u
            munosabat amallariga murojaat qiladi, agar munosabatlar to’g’ri
            bo’lsa operator yoki blokni bajaradi, postfiks esa undan so’ng
            bajariladi, agar noto’g’ri qiymatni olsa dasturimiz undan keyingi
            ya’ni operatorimizdan keyingi amallarni bajaradi yoki boshqa amallar
            yo’q bo’lsa, u to’xtaydi.
          </p>

          <p>Masala: 1 dan 10 gacha bo’lgan sonlarni ko’rib chiqamiz:</p>

          <img src="/image2.png" alt="error" />

          <p>
            Aynan ushbu 4 qator kod 100 marta yozishdan ko'ra yaxshiroq deb
            o'ylayman, sababini bilasiz!
          </p>

          <p>Keling endi aynan ushbu kodni mulohaza qilamiz:</p>

          <img
            src="https://docs.dot-net.uz/~gitbook/image?url=https%3A%2F%2F2189654329-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-ML4YbrwilsjU6IyB7jd%252F-Maueztfd5BpKv11FZ_m%252F-Mauf0Frk72lvsdjMwhm%252Fimage.png%3Falt%3Dmedia%26token%3D5fa64fb2-ebec-4b18-9d5e-7d284e0819e8&width=768&dpr=4&quality=100&sign=f6572f9&sv=1"
            alt="error"
          />

          <p>
            Bu yerda majburiy ajratuvchilar bo'lishi (nuqta, vergul mana men shu
            yerdaman deyishi) shart, ularsiz biz for operatorida kod yoza
            olmaymiz (tan olavering bari bir yoza olmaysiz). Aynan ko’rsatilgan
            tartibda yozish ham shart emas. int i = 1 ni siklda tashqari
            holatlarda ham e’lon qilib sikl parametrini shunchaki i deb ham
            ketishimiz mumkin bo’ladi!
          </p>

          <p>
            O'ylaymanki darsimiz qiziq bo'ldi va sizda hech qanday savol
            tug'ilmadi!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NazariyMalumot;
