const audio = document.getElementById("music");

let messages = [
    "Masz najpiękniejszy śmiech na świecie :)",
    "Masz cudowne, długie, kręcone włoski",
    "Masz piękne, delikatne, nieśmiałe piegi",
    "Masz piękną, naturalną urodę",
    "Masz piękne, delikatne dłonie",
    "Masz seksowną figurę klepsydry",
    "Można Cię podnieść i kręcić Tobą w kółko",
    "Bardzo ładnie wyglądasz w kolczykach i naszyjnikach",
    "Wyglądaasz przeuroczo w bluzach i sweterkach",
    "Masz ładną, jasną skórę",
    "Lubisz pieski, kotki, rude pandki, liski i inne zwierzaczki, a one lubią Ciebie",
    "Pomagasz innym w nauce - dajesz korepetycje przyjaciołom i znajomym",
    "Lubisz kolor różowy (najbardziej uroczy z kolorów)",
    "Zawsze znajdujesz czas dla innych",
    "Nie jesteś obojętna wobec problemów świata",
    "Kochasz całym sercem",
    "Zauważasz dobro oraz wartość w innych ludziach",
    "Zajmujesz się i dbasz o Juleczkę",
    "Jesteś kompaktowa i urocza",
    "Wyglądasz bardzo przyjaźnie",
    "Pachniesz bardzo słodko i atrakcyjnie",
    "Gdy się uśmiechasz, to robią Ci się słodziutkie dołeczki w kącikach ust",
    "Ślicznie i słodko się ubierasz",
    "Masz głos, który jest tak słodki, że dosłownie meltuje moje serce ♥",
    "Przepięknie śpiewasz i nucisz",
    "Mimo iż zachowujesz się często tak, by nie zwracać na siebie uwagi, to i tak przyciągasz wzrok Twoim pięknem~",
    "Wzbudzasz zaufanie w innych",
    "Zawsze dotrzymujesz danego słowa",
    "Aktywnie słuchasz innych, okazując im należytą uwagę i szacunek",
    "Gromadzisz i organizujesz ludzi wokół siebie",
    "Lubisz rozmawiać i dyskutować na przeróżne tematy",
    "Masz cudowne poczucie humoru",
    "Potrafisz poprawić innym nastrój swoim humorem, empatią, i zaangażowaniem",
    "Starasz się zrozumieć innych przed ocenianiem ich",
    "Jesteś najzabawniejszą i najbardziej barwną osobowością w towarzystwie",
    "Potrafisz być bardzo opiekuńcza",
    "Masz matczyne instynkty",
    "Dzielnie walczysz z przeciwnościami losu, które Cię napotykają",
    "Jesteś sprawiedliwa, z mocnym poczuciem tego, co jest dobre, a co złe",
    "Jesteś uczciwa, starasz się żeby każdy otrzymał to, na co zasługuje",
    "Jesteś dociekliwa - chcesz wiedzieć nie tylko co, ale też dlaczego",
    "Jesteś bardzo inteligentna, szybko pojmujesz skomplikowane tematy",
    "Zaskakujesz innych swoją błyskotliwością",
    "Masz bardzo dobrą pamięć, mimo iż nie zawsze jesteś tego świadoma :>",
    "Masz słodkie marzenia co do rodziny i szczęśliwego życia",
    "Nie boisz się mówić swojego zdania",
    "Nie jesteś sztuczna wobec innych osób - jesteś najbardziej prawdziwą osobą jaką znam",
    "Szczerze zależy Ci na bliskich",
    "Masz szerokie zainteresowania",
    "Jesteś bardzo utalentowana w grach komputerowych",
    "Potrafisz być bardzo competitive w zawodach różnego typu",
    "Jesteś bardzo zaangażowana w istotne dla Ciebie sprawy i tematy",
    "Potrafisz włożyć niesamowity wysiłek w wykonanie jakiegoś zadania lub projektu",
    "Pracujesz efektywnie, potrafiąc rozróżnić co w danym zadaniu jest ważne, a co niekoniecznie",
    "Potrafisz dzielnie znieść i wytrzymać nawet bardzo duży dyskomfort",
    "Jesteś zdolna poświęcić siebie, aby ulżyć cierpienia innym",
    "Potrafisz być wyjątkowo bezinteresowna i altruistyczna",
    "Bardzo sprawnie i szybko piszesz na klawiaturze",
    "Zbierasz pluszaki, które są urocze tak jak Ty",
    "Niesamowicie biegle władasz językiem angielskim",
    "Jesteś bardzo uzdolniona w kierunkach ścisłych i dominujesz mężczyzn",
    "Wyszukujesz najfajniejsze tiktoki",
    "Sprawiasz, że czuję się ważny i kochany",
    "Umilasz czas swoją obecnością i ożywiasz towarzystwo",
    "Zawsze grzecznie pytasz, czy możesz wziąć minionki przed ich zabraniem",
    "Robisz mega cracked plays w lolu, które nie wyszłyby żadnemu normalnemu człowiekowi",
    "Nazwałaś swój samochód Rysio",
    "Masz śliczne pazurki, niezależnie czy są pomalowane, czy nie",
    "Z nikim nie czuję się tak komfortowo na bocie, jak z Tobą",
    "You're a strong independent woman, but you're also a pretty princess",
    "Masz bardzo dobre oceny, nie siedząc godzinami nad książkami",
    "Umiesz grać wieloma championami w lolu, na każdej pozycji, nawet na topie !!!!",
    "Jesteś bardzo tolerancyjna i myślisz otwarcie o świecie",
    "Jesteś lojalną i oddaną partnerką i przyjaciółką",
    "Masz dobre, troskliwe, życzliwe serce",
    "Zawsze starasz się, by nikt nie czuł się wykluczony",
    "Przekonujesz innych dyplomacją i słodkością, a nie przemocą",
    "Jesteś dobrą, kochaną córką i zależy Ci na Twoich rodzicach",
    "Odpowiedzialnie wydajesz pieniądze",
    "Jesteś mistrzynią multitaskingu",
    "Potrafisz być skromna i nie przechwalasz się swoimi osiągnięciami i umiejętnościami",
    "Potrafisz przyznawać się do błędów i przepraszać",
    "Spędzasz dużo czasu z rodziną",
    "Dostrzegasz rzeczy, z którymi masz trudności w życiu i starasz się nad nimi pracować",
    "Masz piękny zmysł stylu i estetyki",
    "Potrafisz zaangażować innych w rzeczy, którymi się interesujesz albo chcesz robić",
    "Wszyscy wiedzą, że można na Tobie polegać",
    "Potrafisz bardzo ładnie rysować",
    "Można z Tobą planować przyszłość",
    "Jesteś komunikatywna i szczera w związku",
    "Jesteś przyjazna i nietoksyczna online",
    "Panujesz nad sobą i nie wyładowujesz gniewu na innych w grach online",
    "Bardzo wiele osób darzy Cię głębokim zaufaniem",
    "Jesteś szanowaną i wartościową przyjaciółką i koleżanką",
    "Ludzie uwielbiają spędzać z Tobą czas",
    "Twoim przyjaciołom i znajomym zależy na Tobie, i interesują się tym jak się czujesz, gdy miewasz gorsze dni",
    "Utworzyłaś cały serwer ludzi, którym na Tobie zależy",
    "Potrafisz być najbardziej czułą osobą, jaką znam",
    "Potrafisz sprawiać, że osoby w Twoim otoczeniu czują się docenione",
    "Jesteś rozrywkowa i potrafisz się dobrze bawić oraz rozkręcać towarzystwo",
    "Masz bad vision na porofessorze ♥",
    "Zaangażowałaś się w wiele gier, które były dla mnie ważne, w tym Overwatch, Dead by Daylight, i League of Legends",
    "Jesteś pierwszą i jedyną osobą, która wręczyła mi kwiaty",
    "Potrafisz prowadzić bardzo interesujące i angażujące rozmowy",
    "Gdy ktoś krzywdzi Twoich bliskich, to stajesz w ich obronie",
    "Jesteś wytrwała nawet, gdy przydarza Ci się niesprawiedliwość",
    "Jesteś kreatywna i masz wiele ciekawych pomysłów",
    "Siedzisz na fotelu po turecku, bo jesteś niezależna",
    "Potrafisz pływać w przeciwieństwie do niektórych",
    "Nie potrafisz jeździć na rowerze bo jebać rowerzystów",
    "Potrafisz łaskawie wybaczać, nawet gdy ktoś bestialsko kradnie Ci robaczka albo flashuje po blue buffa",
    "Grzecznie i uprzejmie pytasz, czy możesz KSować jako support przed wzięciem killa",
    "Potrafisz bardzo szybko czytać",
    "Słuchasz samych slay piosenek, i oprócz tego disco polo",
    "Zawsze jesteś bardzo wdzięczna za wszystkie prezenty i przysługi, które otrzymujesz",
    "Jesteś otwarta na nowe idee i pomysły",
    "Mimo, iż wymaga to dużego wysiłku i nieraz wiąże się ze stresem, to potrafisz się przełamać i próbować nowych rzeczy spoza Twojej strefy komfortu",
    "Potrafisz bardzo uroczo się droczyć c:",
    "Można z Tobą żartować na każdy temat",
    "Twoja radość jest najszczerszą, najsłodszą rzeczą na świecie",
    "Dbasz o mnie i wspierasz mnie w ciężkich chwilach",
    "Jesteś empatyczna i zawsze bierzesz pod uwagę perspektywę innych osób",
    "Jesteś bardzo oddana i zaangażowana w rzeczy, które Cię interesują",
    "Jesteś miła i potrafisz umilić innym ich dzień",
    "Lubisz gambling ale zachowujesz się z nim odpowiedzialnie",
    "Pragniesz być mamą i przekazać małemu Bubu dar życia",
    "Nie przekrzykujesz innych w trakcie rozmowy",
    "Starasz się poświęcać każdej bliskiej osobie należytą ilość uwagi",
    "Wolisz spać zamiast np. przeprowadzać czystki etniczne",
    "Robisz słodkie zdjęcia ze mną w grach, co jest bardzo urocze",
    "Głęboko odczuwasz otaczający Cię świat i wydarzenia wokół Ciebie",
    "Jesteś oddaną feministką",
    "Potrafisz aktualizować swój światopogląd w obliczu nowych faktów",
    "Zależy Ci na dobrym samopoczuciu osób wokół Ciebie",
    "Jesteś uczynna i skora do pomocy",
    "Nie wyładowujesz swojego stresu na innych, starasz się uspokoić w samotności",
    "Potrafisz przełamywać własne ograniczenia dzięki ciężkiej pracy",
    "Akceptujesz innych takimi, jakimi są",
    "Spełniłaś marzenia chłopca z pola",
    "Dzielnie stoisz w obronie swoich bliskich i swoich ideałów",
    "Potrafisz być wyjątkowo odważna i pewna siebie",
    "Jesteś kompetentna i rzetelnie wykonujesz swoje obowiązki i stawiane przed Tobą zadania",
    "Gdy coś Cię ekscytuje, zarażasz innych swoim radością i entuzjazmem",
    "Gdy masz dużo energii, potrafisz wypełnić tą energią osoby w Twoim otoczeniu i całkowicie ubarwnić i rozweselić atmosferę",
    "Jesteś bardzo miłą, dostępną i przyjazną osobą",
    "Jesteś wnikliwa i lubisz dogłębnie analizować tematy, które Cię interesują",
    "Jesteś odpowiedzialna i dotrzymujesz wszelkich zobowiązań",
    "Jesteś wyrozumiała, potrafisz zrozumieć inne osoby i wybaczać ich błędy",
    "Jesteś opanowana i spokojna, nie podnosisz głosu na innych",
    "Jesteś prawdziwym liderem - potrafisz organizować innych jednocześnie sama współpracując z zespołem",
    "Zawsze się starasz w życiu, nawet gdy występują nieprzychylne, ciężkie okoliczności",
    "Jesteś classy",
    "Masz cudowne, sarkastyczne poczucie humoru",
    "Jesteś szczodra i lubisz sprawiać innym prezenty i niespodzianki",
    "Masz bujną, kolorową wyobraźnię i potrafisz wymyślać ciekawe, fascynujące scenariusze",
    "Jesteś wrażliwa na uczucia swoje i innych, przeżywasz je i wyrażasz je otwarcie",
    "Masz ciepłą, miłą, otwartą osobowość",
    "Jesteś szczera i bezpośrednia w kontaktach z innymi ludźmi, nie owijasz w bawełnę, nie kłamiesz ani nie oszukujesz innych",
    "Przestrzegasz reguł, zasad, i praw",
    "Oceniasz ludzi po ich wartościach, moralności i charakterze, a nie powierzchownie",
    "Potrafisz wzbudzić optymizm u innych nawet gdy sama nie czujesz się dobrze",
    "Nie gadasz bzdur, rozmowy z Tobą są pełne wartości, a do tego ciekawe i barwne",
    "Potrafisz dostrzec nie tylko wartość człowieka czy idei, ale też jej potencjał",
    "Jesteś honorowa - trzymasz się swoich reguł, zasad i wartości oraz dotrzymujesz danego słowa",
    "Jesteś ciekawa świata i ludzi, ze szczerą ciekawością odkrywasz nowe tajemnice",
    "Jesteś intelektualistką - Twoja mądrość i inteligencja przejawia się w Twoim światopoglądzie, opiniach, w Twojej pracy i nauce oraz w kontaktach z innymi",
    "Jesteś wierna i wrażliwa na uczucia swojego partnera",
    "Na przekór wielu czynnikom stresogennym, potrafisz być żywiołowa i aktywnie poszukujesz szczęścia i radości w życiu",
    "Masz w sobie artystyczną wrażliwość, która przejawia się w różnych kreatywnych pomysłach i pracach, które wykonujesz",
    "Odniosłaś wiele sukcesów w szkole, w konkursach, w internecie a także w grach komputerowych",
    "Nie spoczywasz na laurach i dążysz do doskonalenia się w umiejętnościach i zagadnieniach ważnych dla Ciebie, w tym w grach komputerowych gdzie zawsze starasz się polepszać swój gameplay",
    "Masz szerokie zainteresowania i rozwijasz różne aspekty swojego życia w zbalansowany sposób",
    "Jesteś czuła nie tylko wobec mnie, ale też wobec Juleczki, wobec rodziców, a w przyszłości wobec naszych dzieci",
    "Masz wrażliwe serce i nie jesteś głucha na potrzeby i krzywdę innych",
    "Potrafisz wyrażać się barwnie i interesująco w mowie i w piśmie",
    "Potrafisz precyzyjnie i uprzejmie wyjaśniać innym różne koncepcje i nauczać innych",
    "Myślisz logicznie i racjonalnie",
    "Jesteś uważna, zauważasz rzeczy, które umykają innym",
    "Spędzasz czas na introspekcji - analizujesz i myślisz nad swoimi postępowaniami i masz bogate życie wewnętrzne",
    "Potrafisz być szalenie uwodzicielska i jesteś niewyobrażalnie seksowna~",
    "Dobrze współpracujesz z innymi, jesteś team playerem",
    "Potrafisz zachowywać się bezstronnie, dostrzegasz argumenty obu stron",
    "Potrafisz bardzo pięknie i żywiołowo wyrażać swoje emocje",
    "Potrafisz wytrwale i ciężko pracować gdy sytuacja tego wymaga",
    "Masz szerokie grono znajomych i jesteś ważną częścią życia wielu osób",
    "Myślisz w progresywny, przyszłościowy sposób",
    "Jesteś praktyczna i sensowna",
    "Inspirujesz innych swoją wytrwałością, dobrym sercem i empatią",
    "Zawsze starasz się być kompetentna i być wartościowym członkiem zespołu",
    "Jesteś sprawna i wydajna w zadaniach, które wykonujesz",
    "Potrafisz być bardzo produktywna",
    "Mimo wielu trudności w życiu, masz w sobie dziecięcą niewinność i energię",
    "Potrafisz być bardzo wyluzowana, psotna i figlarna, ale też poważna gdy sytuacja tego wymaga",
    "Jesteś wyjątkowa i jedyna w swoim rodzaju, niepodobna do żadnej innej osoby, którą znam",
    "Jesteś silna i wytrwała zarówno mentalnie jak i fizycznie",
    "Jesteś delikatna i słodka",
    "Jesteś mistrzynią perswazji i dyplomacji",
    "Lubisz planowanie, ale potrafisz też być spontaniczna",
    "Jesteś bardzo nowoczesna i progresywna, ale nie wykluczasz też tradycyjnych ról np. w związku",
    "Szczerze interesujesz się tym, co inni mają do powiedzenia",
    "Jesteś psotna i potrafisz być zuchwała, umiesz utrzeć komuś nosa :)",
    "Masz kolorową, bogatą osobowość - jest w Tobie dużo do odkrycia i poznania",
    "Grzecznie przepraszasz gdy bezlitośnie mordujesz mnie w grach komputerowych 'Oj sori'",
    "Jesteś najbardziej renomowaną właścicielką Haremu, jaką znam",
    "Wychodzisz na dwór",
    "Nikt tak zajebiście nie stealuje jak Ty - smoków i barona w grze, i mojego serca IRL"
];

let firstTime = true;
let muted = false;

async function changeMessage() {
    if (firstTime) {
        audio.play();
        firstTime = false;
    }
    let wiadomosc = messages[Math.floor(Math.random() * messages.length)];
    let dlugosc = wiadomosc.length;
    let fontSize = 0;
    if (dlugosc <= 20) {
        fontSize = 120;
    } else if (dlugosc <= 50) {
        fontSize = 80;
    } else if (dlugosc <= 80) {
        fontSize = 65;
    } else if (dlugosc <= 120) {
        fontSize = 55;
    } else if (dlugosc <= 170) {
        fontSize = 45;
    } else {
        fontSize = 39;
    }
    anime.timeline({ loop: false })
        .add({
            targets: '#message',
            opacity: 0,
            duration: 1500,
            easing: "easeOutExpo",
        });
    await new Promise(r => setTimeout(r, 1500));
    $('#message').html();
    $('#message').css("font-size", fontSize);
    $('#message').html(wiadomosc);
    var textWrapper = document.querySelector('#message');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    $('#message .letter').css("opacity", "0");
    anime.timeline({ loop: false })
        .add({
            targets: '#message',
            opacity: 1,
            duration: 1500,
            easing: "easeOutExpo",
        });
    anime.timeline({ loop: false })
        .add({
            targets: '#message .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1750,
            delay: (el, i) => 40 * (i + 1)
        });
}

function controlAudio() {
    if (muted) {
        audio.muted = false;
        muted = false;
        $('#audio_controls').attr("src", "img/mute.png");
    } else {
        audio.muted = true;
        muted = true;
        $('#audio_controls').attr("src", "img/unmute.png");
    }
}

$(document).ready(function () {
    $('#content').click(changeMessage);
    $('#audio_controls').click(controlAudio);
});