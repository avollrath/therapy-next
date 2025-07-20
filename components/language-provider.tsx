"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  fi: {
    // Header
    home: "Etusivu",
    about: "Tietoa meistä",
    services: "Palvelut",
    therapists: "Terapeutit",
    faq: "UKK",
    contact: "Yhteystiedot",

    // Hero
    "hero.title": "Ammattitaitoista ja myötätuntoista tukea lähellä ja sinun tarpeidesi mukaan.",
    "hero.subtitle": "Me Toukolan Terapian terapeutit olemme koulutettuja, Valviran rekisteröimiä terveydenhuollon ammattilaisia. Toukolan Terapiassa lyhytterapiapalveluja tarjoavat sairaanhoitaja, toimintaterapeutti ja kätilö.",
    "hero.cta": "Varaa aika",

    // About
    "about.title": "Tietoa meistä",
    "about.intro":
      "Toukolan Terapian terapeutit tarjoavat **matalan kynnyksen** keskusteluapua. Olemme **koulutettuja**, **Valviran rekisteröimiä** terveydenhoitoalan ammattilaisia. Tavoitteenamme on tarjota **helposti** ja **nopeasti** saavutettavaa apua ja tukea toimien **tasa-arvoisina kanssakulkijoina**.",
    "about.more":
      "Lyhytterapeuttimme **kuuntelevat**, **kannustavat**, **havainnoivat** ja tekevät **yhteistyötä** asiakkaan lähtökohdista, toiveista ja tarpeista käsin. Hyödynnämme työskentelyssä **terveydenhoitoalan koulutustaustaa**, **tietoa** ja **taitoamme**. Tarpeistasi riippuen sinun on mahdollista varata **lyhytterapiakäynti** esimerkiksi **sairaanhoitajan** tai **kätilön** vastaanotolle.",
    "about.experience":
      "Miralla ja Lauralla on takanaan **vuosien kokemus** julkisen terveydenhuollon eri aloilta ja terapeuteistamme he ovat **Soteriin rekisteröityneitä** terveydenhoitoalan ammattilaisina. Marialla taas on **pitkä kokemus** hyvinvointialan yrittäjänä toimimisesta. Oman peruskoulutuksen lisäksi olemme **kouluttautuneet lyhytterapeuteiksi** ja **Mira** on lyhytterapeuttikoulutuksensa lisäksi tällä hetkellä **Helsingin yliopiston psykoterapeuttikoulutuksessa**.",

    // Services
    "services.title": "Palvelut",
    "services.intro": "**Ammattitaitoista** ja **inhimillistä** tukea lähellä ja sinun tarpeidesi mukaan",
    "services.strengths":
      "Eri koulutustaustojen lisäksi meillä on **erilaisia**, **toisiaan tukevia** ja **täydentäviä vahvuuksia** ja mielenkiinnon kohteita.",
    "services.mira":
      "Miran vahvuuksia ovat **sukupuoleen** ja **seksuaalisuuteen** sekä **eri suhdemuotoihin** liittyvät kysymykset.",
    "services.laura":
      "Lauran vahvuudet ovat kytköksissä **naistentauteihin**, **lisääntymisterveyteen**, **vanhemmuuteen**, **pikkulapsiarkeen** ja **lapsettomuuteen**.",
    "services.maria":
      "Marian vahvuus on **kehollisuuden merkityksen** syvällinen ymmärrys ja sen liittäminen osaksi **keskusteluhoitoja**.",

    // Why Short Therapy
    "why.title": "Miksi valita **lyhytterapia** psykoterapian sijaan?",
    "why.content":
      "Lyhytterapiaan on **helppo hakeutua** ja terapiaan pääsy on useimmiten **nopeaa** ja **helposti saavutettavaa**. **Nopea pääsy** vastaanotolle säästää aikaasi ja voimavarojasi. Terapian aloittamiseen **ei tarvita lähetettä** eikä **diagnoosia** vaan lyhytterapian aloitukseen riittää usein se, että pystyy itse määrittelemään aiheen, ongelman tai elämäntapahtuman, josta haluaa keskustella. Lyhytterapian alussa terapialle laaditaan **tavoitteet** ja **toiveet** yhdessä kanssasi. Suositeltu käyntikertojen määrä on **1-20**. Lyhytterapia ja psykoterapia **eivät sulje toisiaan pois** ja molemmille palveluille on tarvetta.",

    // What Can Help
    "help.title": "Mihin tilanteisiin tai oireisiin **lyhytterapiasta** voi saada apua?",
    "help.intro":
      "Lyhytterapiasta voi saada apua **monenlaisiin**, niin **isoihin** kuin **pieniinkin** ongelmatilanteisiin tai oireisiin, jotka haittaavat hyvinvointia. Esimerkkejä asioista, joihin lyhytterapia voi tuoda **helpotusta**:",
    "help.stress": "**Stressi**",
    "help.crisis": "**Kriisiytynyt** elämäntilanne",
    "help.sleep": "**Uniongelmat**",
    "help.anxiety": "**Ahdistusoireet**",
    "help.emotions": "**Tunteiden säätely**",
    "help.relationships": "**Ihmissuhdeongelmat**",
    "help.depression": "**Masennusoireet**",
    "help.parenting": "**Vanhemmuuteen** liittyviin haastavat tilanteet",
    "help.self": "**Itsetuntemuksen** vahvistamiseen",

    // Safe Space
    "safe.title": "**Turvalliset** ja **esteettömät** tilat",
    "safe.content":
      "Olet tervetullut Toukolan Terapiaan **omana itsenäsi**, riippumatta sukupuolestasi, seksuaalisesta suuntautumisestasi, etnisyydestäsi, suhdemuodoistasi tai vakaumuksestasi. Noudatamme **turvallisen tilan periaatteita** ja tilamme on **esteetön**.",

    // What Happens
    "happens.title": "Mitä **lyhytterapiakäynnillä** tapahtuu?",
    "happens.intro":
      "Lyhytterapia on usein **strukturoitua** ja **tavoitteellista** ja terapiassa pyritään saavuttamaan **muutoksia** suhteellisen **lyhyessä ajassa**.",
    "happens.content1":
      "Lyhytterapiakäyntien sisältö vaihtelee terapeuttien työskentelytavoista ja sinun tarpeistasi riippuen. **Ensikäynneillä** keskitytään usein **tutustumiseen**, sekä **haasteiden** ja **tavoitteiden määrittelyyn**. Sinulta voidaan kysyä esimerkiksi **taustatietojasi** ja **syytä terapiaan hakeutumiselle**.",
    "happens.content2":
      "Haasteiden määrittelyn jälkeen keskustellaan **toiveistasi** ja **odotuksistasi** terapian suhteen ja määritellään yhdessä **terapian tavoite**. Tavoite on jokaisen kohdalla **yksilöllinen**. Lyhytterapiassa tavoitteiden on hyvä olla **käytännönläheisiä** ja **toteutettavissa** lyhytterapiasuhteen aikana.",
    "happens.content3":
      "Terapian tavoitteiden saavuttamiseksi voidaan käyttää **erilaisia menetelmiä** ja **tekniikoita**, kuten **keskustelua**, **mielikuvaharjoituksia**, **välitehtäviä** tai **käytännön taitoharjoituksia**. Tavoitteena on löytää **juuri sinulle sopivia keinoja** ongelmien käsittelemiseksi ja muutoksen edistämiseksi.",

    // Difference
    "difference.title": "Mikä ero on **ratkaisukeskeisellä** ja **kognitiivisella** lyhytterapialla?",
    "difference.intro":
      "**Ratkaisukeskeinen-** ja **kognitiivinen lyhytterapia** ovat molemmat **tehokkaita lähestymistapoja** mielenterveyden ja hyvinvoinnin tukemiseen ja valinta niiden välillä riippuu **tarpeistasi** ja **tavoitteistasi**. Ratkaisukeskeinen lyhytterapia keskittyy **käytännön ratkaisuihin** ja **voimavaroihin**, kun taas kognitiivinen terapia syventää ymmärrystä **ajatus-** ja **tunneprosesseista**.",
    "difference.cognitive":
      "**Kognitiivisen lyhytterapian** menetelmä perustuu kognitiivisen psykoterapian viitekehykseen, jonka perusajatuksena on se, että ihmisen **ajattelu**, **tunteet** ja **käyttäytyminen** ovat yhteydessä toisiinsa. Terapiassa tutkitaan, miten **negatiiviset** tai **vääristyneet ajatukset** vaikuttavat tunteisiin ja käyttäytymiseen. Terapeutti auttaa sinua **tunnistamaan** ja **haastamaan** näitä haitallisia ajatusmalleja, mikä voi johtaa **parempaan mielialaan** ja **toimintakykyyn**. Kognitiivinen terapia voi olla hieman **pidempikestoista**, sillä se syventää ymmärrystä omista **ajatusprosesseistaan**.",
    "difference.solution":
      "**Ratkaisukeskeisessä lyhytterapiassa** keskiössä ovat **vahvuutesi** ja **voimavarasi**. Terapeutti auttaa sinua löytämään **käytännön ratkaisuja** ongelmiisi ja asettamaan **realistisia tavoitteita**. Tavoitteena on edistää **muutosta** keskittymällä siihen, **mikä toimii** hyödyntämällä sinun **voimavarojasi**. Tämä lähestymistapa on usein **tavoitteellinen**, **lyhytkestoinen** ja **käytännönläheinen**, mikä tekee siitä houkuttelevan vaihtoehdon niille, jotka etsivät **nopeita tuloksia**. Työskentely on tyypillisesti **nykyhetkeen keskittyvää** ja **tulevaisuuteen suuntautuvaa**.",

    // FAQ
    "faq.title": "Usein kysytyt kysymykset",
    "faq.q1": "Milloin palvelu on **arvonlisäverotonta**? Miksi eri ammattilaisten vastaanotot ovat **eri hintaisia**?",
    "faq.a1":
      "Terapeuttien palveluiden **arvonlisäverottomuus** ja eri ammattialojen vastaanottojen **hintataso** voivat vaihdella useiden tekijöiden mukaan. Suomessa monet **terveydenhuollon palvelut** ovat **arvonlisäverottomia**. Terapeuttien, kuten psykologien, psykoterapeuttien ja muiden terveydenhoitoalan ammattilaisten, tarjoamat palvelut voivat olla **arvonlisäverottomia**, jos ne täyttävät tietyt kriteerit. Mikäli terapeutti tarjoaa terapiapalveluitaan **laillistettuna terveydenhoitoalan ammattilaisena** ja tuottaa näin **alv-vapaita palveluita**, tämän tulee **rekisteröityä Soteriin** ja tehdä käynneistä **kirjauksia**. **Soteriin rekisteröityjen** ammattilaisten toimintaa valvoo **Aluehallintovirasto** ja toiminta on **tarkkaan säädeltyä**. **Arvonlisäverollisia keskustelupalveluita** ei valvota tai säädellä terveydenhuollon palveluiden tavoin. Käyntejä **ei kirjata ylös**, eikä terapeutti **säilytä tietojasi**. Eri ammattilaisten vastaanottojen **hintataso** vaihtelee monista syistä. Terapeuttimme määrittelevät itse **palveluhinnastonsa**. Hinnoitteluun voivat vaikuttaa esimerkiksi terapeutin **kokemustausta**, **asiakaskohderyhmä**, **muut tulonlähteet** tai **periaatteelliset syyt**. Osa terapeuteistamme työskentelee yrittäjinä **sivutoimisesti**, osa **päätoimisesti**.",
    "faq.q2": "Minkälaisia **kirjauksia** käynneistä tehdään?",
    "faq.a2":
      "**Kirjausten tekeminen** on **lakisääteistä** terveydenhuollossa, jossa ammattilaisilla on velvollisuus dokumentoida **potilastietoja**. Kirjaukset pyritään pitämään **lyhyinä** ja **ytimekkäinä** niin, että niistä käy ilmi vain hoidon kannalta **välttämättömimmät tiedot**. Käynneistä kirjataan **perustietosi**, **nimesi** ja **yhteystietosi** sekä **vointisi** ja **hoitosi** kannalta oleellisimmat tiedot. **Keskustelujen sisältöjä** ei tarkemmin kirjata ja sinulla on **oikeus nähdä** sinusta tehdyt kirjaukset. Käynneistä kirjataan myös **käynnin päivämäärä** sekä **keskusteluun osallistuneiden** osapuolien tiedot. Terapeuttimme ovat **salassapitovelvollisia** ja tietojasi käsitellään **luottamuksellisesti**. Noudatamme toiminnassamme **voimassa olevia lakeja** ja **sääntöjä**, kuten **tietosuojalainsäädäntöä**.",
    "faq.q3": "Onko kirjauksia **pakko tehdä** jos en halua?",
    "faq.a3":
      "Kirjauksia **ei tarvitse tehdä** silloin, kun terapeutti tekee töitä **arvonlisävelvollisesti** eikä ole **rekisteröitynyt Soteriin**.",
    "faq.q4": "Miten kirjaukset säilytetään **turvallisesti**?",
    "faq.a4":
      "1. **Sähköinen tallennus**: Kirjaukset voidaan tallentaa **ulkoiselle tallennusvälineelle**, joissa on **vahva salasanasuojaus** ja **käyttöoikeusrajoitukset**. Tallennusvälinettä säilytetään **lukituissa tiloissa**, jonne on pääsy vain työntekijällä. Tietoja **ei säilytetä** pilvitiedostoissa tai potilastietojärjestelmissä. 2. **Fyysinen tallennus**: Kirjaukset voidaan tehdä **paperisina**, jolloin ne säilytetään **lukollisissa työtiloissa**.",
    "faq.q5": "Miten valitsen itselleni **sopivan terapeutin**?",
    "faq.a5":
      "**Terapeutin valinta** on **tärkeä askel**, ja se voi vaikuttaa **merkittävästi hoitoprosessiin**. Sopivan terapeutin valitseminen voi joskus viedä aikaa ja vaatia **kokeiluja**. Tärkeää on, että tunnet olosi **turvalliseksi**, **luottavaiseksi** ja **kuulluksi** terapeutin kanssa. Terapeutin valinta on **henkilökohtaista** ja **tilannesidonnaista**. **Ei ole yhtä terapeuttia**, joka olisi hyvä kaikille.",

    // Location
    "location.title": "Tilamme ja näin pääset perille",
    "location.content":
      "Tiloissa työskentelevät terapeutit tarjoavat vastaanottoaikoja **itsenäisinä ammatinharjoittajina**. Toukolan Terapian kanssa **samoissa tiloissa** työskentelee myös eri **luovien alojen ammattilaisia**. Sijaitsemme **hyvien kulkuyhteyksien** varrella Helsingin **Toukolassa**, **Arabianrannan** tuntumassa. Meille pääset **raitiovaunuilla 6 ja 8** sekä kaikilla **seiskalla alkavilla** Kustaa Vaasan tien kautta kulkevilla **busseilla**.",

    // Therapists
    "therapists.title": "Terapeutit",
    "therapists.maria.name": "Maria",
    "therapists.maria.intro":
      "Olen **Maria Totro** koulutukseltani **toimintaterapeutti**, **jooganopettaja**, **shiatsuhieroja** sekä **ratkaisukeskeinen lyhytterapeutti**. **Hyvinvointialan yrittäjänä** olen työskennellyt **15 vuotta**. Lyhyempiä koulutuksia minulla on mm. **seksuaaliterveyteen**, **hoitavaan viestintään** ja erityisesti **liikuntaan**, **ravitsemukseen** sekä **terveyteen** liittyen.",
    "therapists.maria.more":
      "Ihmisenä olen **ystävällinen**, **aito**, **läsnäoleva**, **helposti lähestyttävä** ja **turvallinen**. Yhdistän ohjauksessani **ratkaisukeskeistä ajattelutapaa** ja siinä käytettäviä tekniikoita, **läsnäolevaa kohtaamista** ja **keskustelua** **kehollisiin harjoitteisiin**. Yksilö- tai ryhmäohjauksissa on mahdollista pysähtyä omaan **terveyteen** ja **kokonaisvaltaiseen hyvinvointiin** liittyvien **tärkeiden teemojen** äärelle.",
    "therapists.maria.contact":
      "Ole yhteydessä tiedustellaksesi **vapaita aikoja**. Tarjoan myös **etäterapiaa**. Hinnat alkaen **70 €/45 min**. (Alv. 25,5%) Lisätietoja minusta löytyy nettisivuiltani **mariatotro.fi**",

    "therapists.mira.name": "Mira",
    "therapists.mira.intro":
      "Minä olen **Mira** ja koulutukseltani **sairaanhoitaja** sekä **ratkaisukeskeinen lyhytterapeutti**. Työkokemusta sairaanhoitajana minulla on **8 vuotta** eri ikäisten ja taustaisten ihmisten parissa, mm. **kuntouttavissa-** ja **arvioivissa hoitotehtävissä** sekä **psykiatrisena sairaanhoitajana** kotiin tuotavien palvelujen parissa. Muita koulutuksia **mielenterveys-** ja **päihdehoitotyön erikoistuminen** Diak AMK, **sosiaalialan opintoja** sekä **8 vuotta vapaaehtoistoimintaa** Helsinki Missionilla **nuorten tukihenkilötoiminnassa**.",
    "therapists.mira.more":
      "Helsinki Missionilla **nuorten tukihenkilötoiminnassa**. Olen lisäksi **Helsingin yliopiston integratiivisen psykoterapian psykoterapeuttikoulutuksessa** ja valmistumiseni ajoittuu **vuodenvaihteeseen 2028-2029**. Minulle tärkeitä arvoja ovat **yhdenvertaisuus** ja **oikeudenmukaisuus**. Pidän tärkeänä **turvallisen tilan periaatteita** ja **aitoa kohtaamista**, jotka ovat perusta **toimivalle terapiasuhteelle**. Olen työskennellyt **sukupuoleen** ja **seksuaalisuuteen** liittyvien kysymysten parissa, mutta myös näitä aihealueita korostamatta. Kuulun itse **seksuaalivähemmistöön** ja olen **sateenkaariperheen vanhempi**.",
    "therapists.mira.contact":
      "Ota yhteyttä ja varaa aika tapaamiselle. **Miirapiironen@gmail.com**. Hinta **45min /50e** (alv. 0%) Mahdollisuus **etätapaamisille**. **Y-3467537-2**",

    "therapists.laura.name": "Laura",
    "therapists.laura.intro":
      "Moikka mä oon **Laura**. Olen **kätilö** ja **kognitiivinen lyhytterapeutti**. Työskentelen **yksityisen vastaanottoni** lisäksi myös **terveysasemalla** **mielenterveys-** ja **päihdetyön sairaanhoitajana** ja olen **kahden ihanan leikki-ikäisen lapsen äiti**.",
    "therapists.laura.more":
      "Minulla on yli **kymmenen vuoden työkokemus** hoitoalalta. **Merkittävimmät oppini** olen saanut **naistentaudeilta**, **synnytysosastolta**, **rintarauhaskirurgialta** ja **psykiatrialta**. Valmistuin **kätilöksi** Metropolia ammattikorkeakoulusta **vuoden 2013 lopussa** ja **kognitiiviseksi lyhytterapeutiksi** keväällä **2025**. Olen opiskellut **kognitiivista lyhytterapiaa** sekä **Terapiat etulinjaan -hankkeessa**, että **Integrum-instituutissa**.",
    "therapists.laura.contact": "Ole yhteydessä ja varaa aika tapaamiselle. Hinta **45min / 50e** (alv 0%)",

    // Footer
    "footer.rights": "© 2025 Toukolan Terapia. Kaikki oikeudet pidätetään.",
    "footer.privacy": "Tietosuoja",
    "footer.terms": "Käyttöehdot",
    "footer.contact": "Ota yhteyttä",
  },
  en: {
    // Header
    home: "Home",
    about: "About Us",
    services: "Services",
    therapists: "Therapists",
    faq: "FAQ",
    contact: "Contact",

    // Hero
    "hero.title": "Professional and compassionate support nearby and tailored to your needs.",
    "hero.subtitle": "We, the therapists at Toukolan Therapy, are trained healthcare professionals registered with Valvira. At Toukolan Therapy, short-term therapy services are provided by a nurse, an occupational therapist, and a midwife.",
    "hero.cta": "Book an appointment",

    // About
    "about.title": "About Us",
    "about.intro":
      "Our therapists offer **low-threshold** conversational help. We are **trained healthcare professionals** registered by **Valvira** (The National Supervisory Authority for Welfare and Health). Our goal is to offer **accessible help** and **support** that is **quick** and **easy to get** acting as **equal fellow travellers**.",
    "about.more":
      "Our therapists **listen**, **encourage**, **observe**, and **collaborate** based on each client’s wishes and needs.",    "about.experience":
      "Mira and Laura have **years of experience** in different fields of public healthcare. Maria on the other hand has **experience** of working as an **entrepreneur** in the welfare sector. In addition to our own health care training we have **brief therapy training**.",

    // Services
    "services.title": "Services",
    "services.intro": "**Professional** and **humane** support nearby and tailored to your needs",
    "services.strengths":
      "In addition to different educational backgrounds we have **different** **mutually supporting** and **complementary strengths** and special interests.",
      "services.mira": "Mira’s strengths lie in questions related to **gender**, **sexuality**, and **diverse relationship structures**.",    "services.laura":
      "Laura's strengths are connected to **gynecology**, **reproductive health**, **parenting**, **infant care** and **infertility**.",
    "services.maria": "Maria’s strength is her **deep understanding of the body-mind connection** and how to incorporate that into **therapeutic conversations**.",

    // Why Short Therapy
    "why.title": "Why choose **short therapy** instead of psychotherapy?",
    "why.content":
      "Short therapy is **easy to access** and often **quick to start**. **Quick access** saves Your time and resources. You **don't need a referral** or a **diagnosis** to start therapy. It is often enough to just be able to define the topic, problem or life event that You want to discuss with a therapist. The **goals** and **wishes** for therapy are formed together with You during your initial appointment. The recommended number of visits is between **1-20**. Short therapy and psychotherapy are **not mutually exclusive**. Both services are needed in different situations.",

    // What Can Help
    "help.title": "What kind of situations and symptoms can **short therapy** help with?",
    "help.intro":
      "You can get help from short therapy for a **wide variety** of symptoms and problems both **big** and **small**. Examples of situation brief therapy can bring **relief** to:",
    "help.stress": "**Stress**",
    "help.crisis": "**Crisis**/Difficult life situation",
    "help.sleep": "**Sleep problems**",
    "help.anxiety": "**Anxiety symptoms**",
    "help.emotions": "**Emotional self-regulation**",
    "help.relationships": "**Interpersonal**/relationship problems",
    "help.depression": "**Depressive symptoms**",
    "help.parenting": "Challenging situations related to **parenting**",
    "help.self": "Strengthening **self-knowledge**",

    // Safe Space
    "safe.title": "**Safe space** and **barrier-free** accessibility",
    "safe.content":
      "You are welcome here with us regardless of Your **gender**, **body**, **sexual orientation**, **ethnicity**, **relationships** or **beliefs**. Come as you are. We follow the **principles for safe space** and our building is **barrier-free** and **wheelchair accessible**.",

    // What Happens
    "happens.title": "What happens during a **brief therapy session**?",
    "happens.intro":
      "Brief therapy is often **structured** and **goal-oriented** and aims for **changes** in a relatively **short period of time**.",
    "happens.content1":
      "The content of short therapy sessions varies depending on the therapist’s approach and your individual needs. You may be asked, for example, about **background information** and the **reason for seeking therapy**.",
    "happens.content2":
      "After defining the challenges, Your **wishes** and **expectations** regarding therapy are discussed and the **goal for therapy** is set together. In brief therapy, goals should be **practical** and **achievable**.",
    "happens.content3":
      "Various **methods** and **techniques** can be used such as **discussion**, **mental exercises** or **practical training**. The goal is to find **suitable ways** to deal with problems and promote **change**.",

    // Difference
    "difference.title": "What is the difference between **solution-focused** and **cognitive** brief therapy?",
    "difference.intro":
      "**Solution-focused** and **cognitive brief therapy** are both **effective approaches** in supporting mental health and well-being. The choice between them depends on Your **needs** and **goals**. Solution-focused brief therapy focuses on **practical solutions** and Your **resources**, while cognitive therapy deepens the understanding of **thought processes** and **emotions**.",
    "difference.cognitive":
      "The method of **cognitive brief therapy** is based on the framework of cognitive psychotherapy. The basic idea is that a person's **thinking**, **feelings** and **behavior** are interconnected. In therapy we examine how **negative** or **distorted thoughts** affect the Your feelings and behavior. We help You **identify** and **challenge** these harmful thought patterns, which can lead to **improved mood** and **functioning**. Cognitive therapy can be slightly **longer in duration**. In cognitive brief therapy, the professional and the client work in an **equal partnership** towards a **goal-defined objective**. The goals of cognitive brief therapy may include, for example, building a **better quality of life**, making **lifestyle changes** that promote well-being, or finding a **more functional relationship** with oneself and others (Source: Integrum).",
    "difference.solution":
      "**Solution-focused brief therapy** focuses on Your **strengths** and **resources**. The therapist helps You find **practical solutions** to their problems and set **realistic goals**. **Change** is promoted by focusing on **what works** and by utilizing Your own **resources**. This approach is often **goal-oriented**, **short-term** and **practical**, which makes it an appealing option for those looking for **quick results**. The work is typically focused on the **present** and **future**.",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.q1": "When is a service **VAT-free**? Why do different professionals charge **different prices**?",
    "faq.a1":
      "The **VAT exemption** for therapists' services and **price levels** for different professional appointments can vary depending on several factors. In Finland, many **healthcare services** are **VAT-free**. Services provided by therapists, such as nurses and other healthcare professionals, can be **VAT-free** if they meet certain criteria. If a therapist offers their therapy services as a **licensed healthcare professional** and thus produces **VAT-free services**, they must **register with Soteri** and make **records** of their visits. The activities of professionals **registered with Soteri** are supervised by the **Regional State Administrative Agency** and their operations are **strictly regulated**. **VAT-free chat services** are not supervised or regulated like healthcare services. Visits are **not recorded**, and the therapist does **not keep information** about their clients. The **price level** for appointments with different professionals varies for many reasons. Our therapists determine their own **pricing**. Pricing may be influenced by, for example, the therapist's **experience**, **target customer group**, **other sources of income** or **values**. Some of our therapists work as entrepreneurs on a **part-time basis**, some **full-time**.",
    "faq.q2": "What kind of **records** are kept of visits?",
    "faq.a2":
      "Keeping **patient records** is a **legal requirement** in healthcare and professionals are obliged to document **patient information**. We aim to keep the records **short** and **concise**. This would include Your **name** and **contact details**, **date of the visit** and relevant information regarding your **well-being** and **treatment**. The **contents of discussions** are not recorded in more detail and you have the **right to see** the records we keep of you. Our therapists are obliged to maintain **full confidentiality**. We comply with **applicable laws** and **regulations** in our operations, such as **data protection legislation**.",
    "faq.q3": "Will there be records even if I **don't want** to?",
    "faq.a3":
      "Records **do not need to be kept** when the therapist works under **VAT** and is **not registered with Soteri**.",
    "faq.q4": "How are the records kept **securely**?",
    "faq.a4":
      "1. **Electronic storage**: Records can be stored on an **external storage device** with **strong password protection** and **access restrictions**. The storage media is kept in **locked facilities**, which only the employee has access to. The data is **not stored** in cloud files or patient information systems. 2. **Physical storage**: Records can be made on **paper**, in which case they are kept in a **locked safe**.",
    "faq.q5": "How do I choose the **right therapist** for me?",
    "faq.a5":
      "**Choosing a therapist** is an **important step**, and can **significantly affect** the treatment process. Choosing the right therapist can sometimes take time and require **experimentation**. What is important is that You feel **safe** and **heard** by Your therapist. Choosing a therapist is **personal** and **situational**. There is **no one therapist** that is good for everyone.",

    // Location
    "location.title": "Location",
    "location.content":
      "Therapists working in the premises offer appointments as **self-employed people**. Professionals from different **creative fields** also work in the same premises as Toukola's Terapia. We are located in **Toukola, Helsinki**, near **Arabianranta**. We are easily accessible by **public transportation**. You can get here by **trams 6 and 8** and all the **buses** that start with the number seven and go through **Kustaa Vaasa road**.",

    // Therapists
    "therapists.title": "Therapists",
    "therapists.maria.name": "Maria",
    "therapists.maria.intro":
      "I am **Maria Totro**, an **occupational therapist**, **yoga teacher**, **shiatsu masseur**, and **solution-focused brief therapist** by education. I have worked as an **entrepreneur** in the **wellness industry** for **15 years**. I have shorter training in **sexual health**, **therapeutic communication**, and especially in **exercise**, **nutrition**, and **health**.",
    "therapists.maria.more":
      "As a person, I am **friendly**, **genuine**, **present**, **approachable**, and **safe**. In my guidance, I combine **solution-focused thinking** and techniques, **present encounters**, and **discussions** with **physical exercises**. In individual or group guidance, it is possible to pause on **important themes** related to your **health** and **holistic well-being**.",
    "therapists.maria.contact":
      "Contact me to inquire about **available times**. I also offer **remote therapy**. Prices starting from **70 €/45 min**. (VAT 25.5%) More information about me can be found on my website **mariatotro.fi**",

    "therapists.mira.name": "Mira",
    "therapists.mira.intro":
      "I am **Mira**, a **nurse** and **solution-focused brief therapist** by education. I have **8 years** of work experience as a nurse with people of different ages and backgrounds, including in **rehabilitative** and **evaluative care tasks**, and as a **psychiatric nurse** in home-delivered services. Other training includes specialization in **mental health** and **substance abuse care** at Diak UAS, **social studies**, and **8 years** of volunteer work at Helsinki Mission in **youth support activities**.",
    "therapists.mira.more":
      "Important values for me are **equality** and **justice**. I consider the **principles of safe space** and **genuine encounters** important, which are the foundation for a **functioning therapeutic relationship**. I have worked with issues related to **gender** and **sexuality**, but also without emphasizing these topics. I belong to a **sexual minority** myself and am a parent in a **rainbow family**.",
    "therapists.mira.contact":
      "Get in touch and book an appointment. **Miirapiironen@gmail.com**. Price **45min /50e** (VAT 0%) Possibility for **remote meetings**. **Y-3467537-2**",

    "therapists.laura.name": "Laura",
    "therapists.laura.intro":
      "Hi, I'm **Laura**. I am a **midwife** and **cognitive brief therapist**. In addition to my **private practice**, I also work at a **health center** as a **mental health** and **substance abuse nurse**, and I am the mother of **two wonderful children**, ages 2 and 4.",
    "therapists.laura.more":
      "I have more than **ten years** of work experience in the nursing field. I have gained my **most important lessons** from **gynecology** and **maternity units**, **breast surgery ward** and **psychiatry**. I graduated as a **midwife** from Metropolia University of Applied Sciences at the **end of 2013** and as a **cognitive brief therapist** in the **fall of 2025**. I have studied **cognitive brief therapy** both in **Terapiat etulinjaan project** and **Integrum institute**.",
    "therapists.laura.contact": "Get in touch and book an appointment. Price **45min / 50e** (VAT 0%)",

    // Footer
    "footer.rights": "© 2025 Toukola Therapy. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fi",
  setLanguage: () => {},
  t: () => "",
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fi")

  const t = (key: string): string => {
    const text = translations[language][key as keyof (typeof translations)[typeof language]] || key
    // Convert **text** to <strong>text</strong>
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
