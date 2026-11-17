/* Paragraph Writing — mövzular dərsliklərdəki düşünmə suallarından götürülüb,
   paraqraflar yalnız həmin sinfin dərsliyindəki sözlərlə yazılıb.
   Hər cümlə bir sətirdir:  AZ mətn || ingiliscə hissə 1 | hissə 2 | ...
   AZ mətndə {N:...} — N-ci addımda qırmızı olan hissə.
   İngiliscə hissədə [söz1|söz2] — çaşdırıcı (səhv) seçimlər. */
window.PARA = {
  minWords: 60,
  plan: [
    ["Mövzu cümləsi", "Sualın cavabını yaz + <b>because</b> ..."],
    ["Birinci səbəb", "<b>First,</b> / <b>Firstly,</b> + səbəb. Nümunə: <b>For example,</b> ..."],
    ["İkinci səbəb", "<b>Also,</b> + səbəb + nümunə"],
    ["Fərqli fikir", "<b>But</b> / <b>However,</b> some people think ..."],
    ["Cavab", "<b>That's true, but</b> ... + öz fikrin"],
    ["Nəticə", "<b>In conclusion,</b> I think ... — fikrini yenidən yaz"]
  ],
  linkers: ["first","firstly","for example","also","but","however","in conclusion","because","so"],
  topics: [
/* ===================== 5-ci sinif ===================== */
{ grade: 5, unit: 1, q: "What is important for you? Why?", units: [
"{1:Mənim üçün} {2:ailəm və dostlarım} {3:vacibdir}. || for me, [because|but] | my family and my friends | are important.",
"{1:Birincisi}, {2:ailəm} {3:hər gün} {2:mənə kömək edir}. || first, [also|so] | my family helps me | every day.",
"{1:Məsələn}, {2:anam} {3:ev tapşırığımda} {2:mənə kömək edir}. || for example, [but|because] | my mom helps me | with my homework.",
"{1:Həmçinin}, {3:məktəbdə} {2:dostlarımla əylənirəm}. || also, [first|but] | I have fun with my friends | at school.",
"{1:Biz} {2:parkda} {1:voleybol oynayırıq} {3:və musiqiyə qulaq asırıq}. || we play volleyball | in the park | and listen to music.",
"{1:Amma} {2:bəzi insanlar düşünür ki}, {3:mobil telefonlar daha vacibdir}. || but [so|first] | some people think | cell phones are more important.",
"{1:Bu doğrudur}, {2:amma} {3:ailə və dostlar} {4:daha xüsusidir}. || that's true, | but | family and friends | are more special.",
"{1:Nəticə olaraq}, {2:məncə}, {3:ailəm və dostlarım} {4:həyatımda çox vacibdir}. || in conclusion, [first|also] | I think | my family and my friends | are very important in my life."
]},
{ grade: 5, unit: 2, q: "Why is English important to you?", units: [
"{1:İngilis dili} {2:mənim üçün vacibdir}, {3:çünki o, qlobal dildir}. || English | is important to me | because it is a global language.",
"{1:Birincisi}, {3:başqa ölkələrdən olan insanlarla} {2:ünsiyyət qura bilərəm}. || first, [also|but] | I can communicate | with people from other countries.",
"{1:Məsələn}, {2:mən} {3:Yaponiyadan olan məktub dostumla} {2:yazışıram}. || for example, [so|because] | I chat | with my pen pal from Japan.",
"{1:Həmçinin}, {2:ingilis dili} {3:internetdə} {2:hər yerdədir}. || also, [first|but] | English is everywhere | on the Internet.",
"{1:Mən} {2:ingilis dilində} {1:mahnılara qulaq asır} {3:və filmlərə baxıram}. || I listen to songs | in English | and watch movies.",
"{1:Amma} {2:bəzi şagirdlər düşünür ki}, {3:ingilis dili çətindir}. || but [also|first] | some students think | English is difficult.",
"{1:Bu doğrudur}, {2:amma} {3:hər gün oxusan}, {4:əyləncəli olur}. || that's true, | but | if you study every day, | it is fun.",
"{1:Nəticə olaraq}, {2:məncə}, {3:ingilis dili} {4:mənim üçün çox vacibdir}. || in conclusion, [first|for example] | I think | English | is very important to me."
]},
{ grade: 5, unit: 3, q: "Why is home important?", units: [
"{1:Ev} {2:vacibdir}, {3:çünki o, bizim xüsusi yerimizdir}. || home | is important | because it is our special place.",
"{1:Birincisi}, {3:evdə} {2:ailəmlə birlikdə oluruq}. || first, [also|but] | we are together with our family | at home.",
"{1:Məsələn}, {3:yemək otağında} {2:birlikdə şam yeməyi yeyirik}. || for example, [so|because] | we have dinner together | in the dining room.",
"{1:Həmçinin}, {2:evdə} {3:özümü xoşbəxt hiss edirəm}. || also, [first|but] | at home | I am happy.",
"{1:Mənim sevimli yerim} {2:yataq otağımdır}. || my favorite place | is my bedroom.",
"{1:Orada} {2:musiqiyə qulaq asır} {3:və ev tapşırığımı edirəm}. || there | I listen to music | and do my homework.",
"{1:Amma} {2:bəzi evlər} {3:çox kiçikdir}. || but [also|first] | some homes | are very small.",
"{1:Bu doğrudur}, {2:amma} {3:kiçik ev də} {4:gözəl ola bilər}. || that's true, | but | a small home | can be beautiful too.",
"{1:Nəticə olaraq}, {2:məncə}, {3:ev} {4:çox xüsusi yerdir}. || in conclusion, [first|also] | I think | home | is a very special place."
]},
{ grade: 5, unit: 4, q: "Why is family important?", units: [
"{1:Ailə} {2:çox vacibdir}, {3:çünki ailəmiz bizi sevir}. || family | is very important | because our family loves us.",
"{1:Birincisi}, {2:valideynlərim} {3:hər gün} {2:mənə kömək edir}. || first, [also|but] | my parents help me | every day.",
"{1:Məsələn}, {2:atam} {3:riyaziyyatda} {2:mənə kömək edir}. || for example, [so|because] | my dad helps me | with math.",
"{1:Həmçinin}, {2:biz} {3:həftəsonları} {2:birlikdə əylənirik}. || also, [first|but] | we have fun together | on the weekend.",
"{1:Nənəmi və babamı ziyarət edirik} {2:və birlikdə nahar edirik}. || we visit my grandparents | and have lunch together.",
"{1:Amma} {2:bəzi insanlar düşünür ki}, {3:dostlar daha vacibdir}. || but [also|first] | some people think | friends are more important.",
"{1:Bu doğrudur}, {2:amma} {3:ailə} {4:həmişə bizimlədir}. || that's true, | but | family | is always with us.",
"{1:Nəticə olaraq}, {2:məncə}, {3:ailə} {4:həyatımızda çox vacibdir}. || in conclusion, [first|for example] | I think | family | is very important in our life."
]},
{ grade: 5, unit: 5, q: "What's important in your daily routine?", units: [
"{1:Gündəlik rejimimdə} {3:çox şey} {2:vacibdir}. || in my daily routine, | a lot of things | are important.",
"{1:Birincisi}, {2:mən} {3:hər gün} {2:erkən yuxudan qalxıram}. || first, [also|but] | I get up early | every day.",
"{1:Məsələn}, {2:səhər saat yeddidə qalxıram} {3:və səhər yeməyi yeyirəm}. || for example, [so|because] | I get up at seven o'clock | and have breakfast.",
"{1:Həmçinin}, {3:günortadan sonra} {2:ev tapşırığımı edirəm}. || also, [first|but] | I do my homework | in the afternoon.",
"{1:Boş vaxtımda} {2:dostlarımla futbol oynayıram}. || in my free time, | I play soccer with my friends.",
"{1:Amma} {2:bəzi uşaqlar} {3:gec yatırlar}. || but [also|first] | some children | go to bed late.",
"{1:Bu doğrudur}, {2:amma} {3:erkən yatmaq} {4:çox vacibdir}. || that's true, | but | going to bed early | is very important.",
"{1:Nəticə olaraq}, {2:məncə}, {3:yaxşı gündəlik rejim} {4:bizi xoşbəxt edir}. || in conclusion, [first|for example] | I think | a good daily routine | makes us happy."
]},
{ grade: 5, unit: 6, q: "Why is education important?", units: [
"{1:Təhsil} {2:vacibdir}, {3:çünki biz məktəbdə çox şey öyrənirik}. || education | is important | because we learn a lot at school.",
"{1:Birincisi}, {3:riyaziyyat, tarix və təbiət elmləri kimi} {2:fənləri öyrənirik}. || first, [also|but] | we study subjects | like math, history and science.",
"{1:Məsələn}, {3:təbiət elmlərində} {2:planetləri öyrənirik}. || for example, [so|because] | we learn about planets | in science.",
"{1:Həmçinin}, {3:məktəbdə} {2:yeni dostlar tapırıq}. || also, [first|but] | we make new friends | at school.",
"{1:Biz} {2:kafeteriyada} {1:birlikdə nahar edirik}. || we have lunch together | in the cafeteria.",
"{1:Amma} {2:bəzi şagirdlər düşünür ki}, {3:məktəb darıxdırıcıdır}. || but [also|first] | some students think | school is boring.",
"{1:Bu doğrudur}, {2:amma} {3:yaxşı müəllimlər} {4:dərsləri əyləncəli edir}. || that's true, | but | good teachers | make classes fun.",
"{1:Nəticə olaraq}, {2:məncə}, {3:təhsil} {4:həyatımız üçün çox vacibdir}. || in conclusion, [first|for example] | I think | education | is very important for our life."
]},
{ grade: 5, unit: 7, q: "Is it important to look good?", units: [
"{1:Məncə}, {2:yaxşı görünmək} {3:vacibdir}, {4:amma hər şey deyil}. || I think | looking good | is important, | but it is not everything.",
"{1:Birincisi}, {2:paltarlarımız} {3:şəxsiyyətimizi} {2:göstərir}. || first, [also|so] | our clothes show | our personality.",
"{1:Məsələn}, {2:mən} {3:rahat cins şalvar və futbolka} {2:geyinirəm}. || for example, [but|because] | I wear | comfortable jeans and a T-shirt.",
"{1:Həmçinin}, {3:xüsusi günlərdə} {2:gözəl paltarlar geyinirik}. || also, [first|but] | we wear beautiful clothes | on special days.",
"{1:Amma} {2:bəzi insanlar} {3:yalnız paltar haqqında düşünür}. || but [also|first] | some people | only think about clothes.",
"{1:Bu yaxşı deyil}, {2:çünki} {3:insanın xasiyyəti} {4:daha vacibdir}. || that's not good, | because | a person's personality | is more important.",
"{1:Nəticə olaraq}, {2:məncə}, {3:yaxşı xasiyyət} {4:daha vacibdir}. || in conclusion, [first|for example] | I think | a good personality | is more important."
]},
{ grade: 5, unit: 8, q: "Why is it important to do sports?", units: [
"{1:İdmanla məşğul olmaq} {2:vacibdir}, {3:çünki idman bizi sağlam edir}. || doing sports | is important | because sports make us healthy.",
"{1:Birincisi}, {2:idman} {3:bizi güclü} {2:edir}. || first, [also|but] | sports make us | strong.",
"{1:Məsələn}, {2:üzgüçülük} {3:əzələlərimizi inkişaf etdirir}. || for example, [so|because] | swimming | develops our muscles.",
"{1:Həmçinin}, {2:idman} {3:bizə komanda işini} {2:öyrədir}. || also, [first|but] | sports teach us | teamwork.",
"{1:Futbolda} {2:komandamızla birlikdə oynayırıq}. || in soccer, | we play together with our team.",
"{1:Amma} {2:bəzi insanlar} {3:idmanı sevmir}. || but [also|first] | some people | don't like sports.",
"{1:Bu doğrudur}, {2:amma} {3:onlar} {4:gəzə və ya rəqs edə bilərlər}. || that's true, | but | they can | walk or dance.",
"{1:Nəticə olaraq}, {2:məncə}, {3:idman} {4:hər kəs üçün faydalıdır}. || in conclusion, [first|for example] | I think | sports | are good for everyone."
]},
/* ===================== 6-cı sinif ===================== */
{ grade: 6, unit: 1, q: "Is it important to have places in town where teenagers can hang out?", units: [
"{1:Məncə}, {2:şəhərdə} {3:yeniyetmələrin vaxt keçirə biləcəyi yerlər} {4:çox vacibdir}. || in my opinion, [however|because] | places in town | where teenagers can hang out | are very important.",
"{1:Birincisi}, {2:yeniyetmələr} {3:dostları ilə} {2:görüşə bilərlər}. || firstly, [also|so] | teenagers can meet | their friends.",
"{1:Məsələn}, {2:skeyt parkında və ya boulinq zalında} {3:əylənə bilərlər}. || for example, [but|then] | at the skatepark or the bowling alley | they can have fun.",
"{1:Həmçinin}, {2:bu yerlər} {3:təhlükəsizdir}. || also, [however|first] | these places | are safe.",
"{1:Valideynlər} {2:uşaqlarının harada olduğunu} {1:bilirlər}. || parents know | where their children are.",
"{1:Lakin} {2:bəzi insanlar düşünür ki}, {3:yeniyetmələr evdə olmalıdır}. || however, [for example|firstly] | some people think that | teenagers should stay at home.",
"{1:Bu doğrudur}, {2:amma} {3:yeniyetmələrin} {4:dostlarla vaxt keçirməyə ehtiyacı var}. || that's true, | but | teenagers | need time with their friends.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:hər şəhərdə} {4:yeniyetmələr üçün yerlər olmalıdır}. || in conclusion, [firstly|also] | I believe that | every town | should have places for teenagers."
]},
{ grade: 6, unit: 2, q: "Do you think that it is a good idea to have a meat-free day every week?", units: [
"{1:Məncə}, {2:hər həftə ətsiz gün} {3:yaxşı fikirdir}. || in my opinion, [however|because] | a meat-free day every week | is a good idea.",
"{1:Birincisi}, {2:tərəvəz və meyvə} {3:sağlamdır}. || firstly, [also|so] | vegetables and fruit | are healthy.",
"{1:Məsələn}, {2:düyü və lobya} {3:dadlı və sağlam yeməkdir}. || for example, [but|then] | rice and beans | are delicious and healthy.",
"{1:Həmçinin}, {3:balıq və ya pendir} {2:yeyə bilərik}. || also, [however|first] | we can eat | fish or cheese.",
"{1:Aralıq dənizi pəhrizi} {2:çox sağlamdır}. || the Mediterranean diet | is very healthy.",
"{1:Lakin} {2:bəzi insanlar} {3:ət yeməyi sevir}. || however, [for example|firstly] | some people | love meat.",
"{1:Bu doğrudur}, {2:amma} {3:həftədə bir gün} {4:çətin deyil}. || that's true, | but | one day a week | isn't difficult.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:ətsiz gün} {4:sağlam qidalanma üçün yaxşıdır}. || in conclusion, [firstly|also] | I believe that | a meat-free day | is good for a healthy diet."
]},
{ grade: 6, unit: 3, q: "Why are holidays important?", units: [
"{1:Tətillər} {2:vacibdir}, {3:çünki onlar bizi xoşbəxt edir}. || holidays | are important | because they make us happy.",
"{1:Birincisi}, {3:tətildə} {2:ailəmizlə vaxt keçiririk}. || firstly, [also|so] | we spend time with our family | on holiday.",
"{1:Məsələn}, {2:keçən yay} {3:Fransada avtomobil səyahətində idik}. || for example, [but|then] | last summer | we were on a road trip in France.",
"{1:Həmçinin}, {2:yeni yerləri} {3:görürük}. || also, [however|first] | we see | new places.",
"{1:Muzeyləri, çimərlikləri və küçə bazarlarını ziyarət edirik}. || we visit museums, beaches and street markets.",
"{1:Lakin} {2:bəzi insanlar düşünür ki}, {3:tətillər darıxdırıcıdır}. || however, [for example|firstly] | some people think that | holidays are boring.",
"{1:Bu doğru deyil}, {2:çünki} {4:tətildə} {3:çoxlu əyləncəli işlər var}. || that's not true, | because | there are a lot of fun things | to do on holiday.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:tətillər} {4:hər kəs üçün vacibdir}. || in conclusion, [firstly|also] | I believe that | holidays | are important for everyone."
]},
{ grade: 6, unit: 4, q: "Why do you think people read stories?", units: [
"{1:Məncə}, {2:insanlar hekayələri oxuyur}, {3:çünki hekayələr maraqlıdır}. || in my opinion, [however|because] | people read stories | because stories are interesting.",
"{1:Birincisi}, {2:hekayələr} {3:bizə} {2:yeni şeylər öyrədir}. || firstly, [also|so] | stories teach | us new things.",
"{1:Məsələn}, {2:«Peter və Canavar»} {3:ibrətli hekayədir}. || for example, [but|then] | Peter and the Wolf | is a story with a moral.",
"{1:O, bizə} {2:yalan danışmamağı öyrədir}. || it teaches us | not to tell lies.",
"{1:Həmçinin}, {2:hekayələr} {3:əyləncəlidir}. || also, [however|first] | stories | are fun.",
"{1:Lakin} {2:bəzi insanlar} {3:film izləməyi daha çox sevir}. || however, [for example|firstly] | some people | prefer to watch films.",
"{1:Bu doğrudur}, {2:amma} {3:çox filmlər} {4:kitablardakı hekayələrdəndir}. || that's true, | but | a lot of films | are stories from books.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:hekayələr} {4:həmişə vacib olacaq}. || in conclusion, [firstly|also] | I believe that | stories | will always be important."
]},
{ grade: 6, unit: 5, q: "How was travelling different 100 years ago?", units: [
"{1:Yüz il əvvəl} {2:səyahət etmək} {3:çox fərqli idi}. || 100 years ago, | travelling | was very different.",
"{1:Birincisi}, {2:insanlar} {3:təyyarə ilə} {2:səyahət edə bilmirdilər}. || firstly, [also|so] | people couldn't travel | by aeroplane.",
"{1:Onlar} {2:gəmi və ya qatarla} {1:səyahət edirdilər}. || they travelled | by ship or by train.",
"{1:Məsələn}, {2:Nelli Blay} {3:dünya ətrafında} {2:gəmi və qatarla səyahət etdi}. || for example, [but|then] | Nellie Bly travelled by ship and train | around the world.",
"{1:Həmçinin}, {2:səyahətlər} {3:çox uzun idi}. || also, [however|first] | journeys | were very long.",
"{1:İndi} {2:biz} {3:bir gündə} {2:başqa ölkəyə gedə bilərik}. || now | we can go to another country | in one day.",
"{1:Lakin} {2:indi} {3:şəhərlərdə çox tıxac var}. || however, [for example|firstly] | now | there is a lot of traffic in cities.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:bu gün səyahət etmək} {4:çox sürətlidir}. || in conclusion, [firstly|also] | I believe that | travelling today | is very fast."
]},
{ grade: 6, unit: 6, q: "What kind of person can be a hero?", units: [
"{1:Məncə}, {2:cəsur və mehriban insan} {3:qəhrəman ola bilər}. || in my opinion, [however|because] | a brave and kind person | can be a hero.",
"{1:Birincisi}, {2:qəhrəmanlar} {3:başqa insanlara} {2:kömək edir}. || firstly, [also|so] | heroes help | other people.",
"{1:Məsələn}, {2:həkimlər} {3:hər gün} {2:insanlara kömək edir}. || for example, [but|then] | doctors help people | every day.",
"{1:Həmçinin}, {2:qəhrəman} {3:güclü olmalıdır}. || also, [however|first] | a hero | should be strong.",
"{1:Amma} {2:qəhrəman olmaq üçün} {3:super qəhrəman olmaq lazım deyil}. || but | to be a hero, | you don't need to be a superhero.",
"{1:Lakin} {2:bəzi insanlar düşünür ki}, {3:yalnız məşhur insanlar qəhrəmandır}. || however, [for example|firstly] | some people think that | only famous people are heroes.",
"{1:Bu doğru deyil}, {2:çünki} {3:anam da} {4:mənim qəhrəmanımdır}. || that's not true, | because | my mom | is my hero too.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:hər kəs} {4:gündəlik həyatda qəhrəman ola bilər}. || in conclusion, [firstly|also] | I believe that | everyone | can be an everyday hero."
]},
{ grade: 6, unit: 7, q: "How can we help each other have great ideas?", units: [
"{1:Məncə}, {2:biz} {3:birlikdə işləyərək} {2:bir-birimizə kömək edə bilərik}. || in my opinion, [however|because] | we can help each other | by working together.",
"{1:Birincisi}, {3:fikirlərimizi} {2:dostlarımızla bölüşə bilərik}. || firstly, [also|so] | we can share | our ideas with our friends.",
"{1:Məsələn}, {2:məktəbdə} {4:qruplarda} {3:layihələr üzərində işləyirik}. || for example, [but|then] | at school | we work on projects | in groups.",
"{1:Həmçinin}, {2:müəllimlər} {3:gənc ixtiraçılara} {2:kömək edə bilər}. || also, [however|first] | teachers can help | young inventors.",
"{1:Məsələn}, {2:Laura} {3:fənərini} {4:məktəbdə} {2:yaratdı}. || for example, [but|then] | Laura created | her torch | at school.",
"{1:Lakin} {2:bəzi insanlar} {3:tək işləməyi sevir}. || however, [for example|firstly] | some people | like to work alone.",
"{1:Bu doğrudur}, {2:amma} {3:iki fikir} {4:birindən yaxşıdır}. || that's true, | but | two ideas | are better than one.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:birlikdə işləmək} {4:bizə əla fikirlər verir}. || in conclusion, [firstly|also] | I believe that | working together | gives us great ideas."
]},
{ grade: 6, unit: 8, q: "What small things can we do to help nature?", units: [
"{1:Məncə}, {2:biz} {3:təbiətə kömək etmək üçün} {2:çox kiçik işlər görə bilərik}. || in my opinion, [however|because] | we can do a lot of small things | to help nature.",
"{1:Birincisi}, {2:zibili} {3:təkrar emal edə bilərik}. || firstly, [also|so] | we can recycle | our rubbish.",
"{1:Məsələn}, {3:məktəbdə} {2:təkrar emal} {3:çox vacibdir}. || for example, [but|then] | recycling | at school is very important.",
"{1:Həmçinin}, {2:ağac} {3:əkə bilərik}. || also, [however|first] | we can plant | trees.",
"{1:Quşlar və heyvanlar} {2:ağaclara ehtiyac duyur}. || birds and animals | need trees.",
"{1:Lakin} {2:bəzi insanlar düşünür ki}, {3:kiçik işlər kömək etmir}. || however, [for example|firstly] | some people think that | small things don't help.",
"{1:Bu doğru deyil}, {2:çünki} {3:könüllülər} {4:gölü təmizlədilər}. || that's not true, | because | volunteers | cleaned the lake.",
"{1:Nəticə olaraq}, {2:mən inanıram ki}, {3:kiçik işlər} {4:fərq yarada bilər}. || in conclusion, [firstly|also] | I believe that | small things | can make a difference."
]},
/* ===================== 8-ci sinif ===================== */
{ grade: 8, unit: 1, q: "Which activity do you like doing in your free time? Why?", units: [
"{1:Boş vaxtımda} {2:ən çox} {3:ulduzları seyr etməyi sevirəm}, {4:çünki bu, rahatladıcıdır}. || in my free time, | I like | stargazing most | because it is relaxing.",
"{1:Birincisi}, {2:bu hobbi} {3:bizə kainat haqqında} {2:çox şey öyrədir}. || firstly, [however|finally] | this hobby teaches us a lot | about the universe.",
"{1:Məsələn}, {3:teleskopla} {2:planetləri görə bilirəm}. || for example, [moreover|finally] | I can see planets | with my telescope.",
"{1:İkincisi}, {2:ulduzları seyr etmək} {3:diqqəti cəmləməyi} {2:inkişaf etdirir}. || secondly, [firstly|however] | stargazing improves | concentration.",
"{1:Bundan əlavə}, {2:bu hobbi} {3:psixi sağlamlıq üçün} {2:faydalıdır}. || in addition, [for example|because] | this hobby is good | for mental health.",
"{1:Digər tərəfdən}, {2:bəzi insanlar düşünür ki}, {3:bu hobbi darıxdırıcıdır}. || on the other hand, [firstly|in addition] | some people think | this hobby is boring.",
"{1:Amma} {2:məncə}, {3:kainatın gözəlliyi} {4:heç vaxt darıxdırıcı deyil}. || but | in my opinion, | the beauty of the universe | is never boring.",
"{1:Yekun olaraq}, {2:ulduzları seyr etmək} {3:boş vaxt üçün} {2:mükəmməl seçimdir}. || to sum up, [firstly|for example] | stargazing is a perfect choice | for free time."
]},
{ grade: 8, unit: 2, q: "Do you like trying food from other countries? Why or why not?", units: [
"{1:Mən} {2:başqa ölkələrin} {1:yeməklərini dadmağı çox sevirəm}. || I really like trying food | from other countries.",
"{1:Birincisi}, {2:hər mətbəx} {3:ölkənin mədəniyyətini} {2:təmsil edir}. || firstly, [however|finally] | every cuisine represents | the culture of a country.",
"{1:Məsələn}, {2:Yaponiyada} {3:suşi} {4:dəniz yosunu ilə hazırlanır}. || for example, [moreover|finally] | in Japan, | sushi | is made with seaweed.",
"{1:İkincisi}, {2:yeni dadlar} {3:səyahəti daha maraqlı edir}. || secondly, [firstly|however] | new flavours | make travelling more interesting.",
"{1:Bundan əlavə}, {2:ənənəvi yeməklər} {3:adətən təzə tərkib hissələrindən hazırlanır}. || in addition, [for example|because] | traditional dishes | are usually made with fresh ingredients.",
"{1:Digər tərəfdən}, {2:bəzi yeməklər} {3:çox acı və ya yağlıdır}. || on the other hand, [firstly|in addition] | some dishes | are very spicy or fatty.",
"{1:Ona görə də} {2:həmişə} {3:kiçik porsiya sifariş edirəm}. || that's why | I always | order a small portion.",
"{1:Yekun olaraq}, {2:mən inanıram ki}, {3:başqa ölkələrin yeməklərini dadmaq} {4:mədəniyyətləri kəşf etməyin ən yaxşı yoludur}. || to sum up, [firstly|for example] | I believe that | trying food from other countries | is the best way to discover cultures."
]},
{ grade: 8, unit: 3, q: "What kind of weather do you like most? Why?", units: [
"{1:Mən} {2:ən çox} {3:mülayim yaz havasını sevirəm}. || I like | mild spring weather | most.",
"{1:Birincisi}, {2:yazda} {3:günəş parlayır}, {4:amma hava çox isti deyil}. || firstly, [however|finally] | in spring | the sun shines, | but it is not too hot.",
"{1:Məsələn}, {2:parkda} {3:rahat gəzə və dostlarla söhbət edə bilərik}. || for example, [moreover|finally] | in the park | we can walk and chat with friends.",
"{1:İkincisi}, {2:yaz mənzərəsi} {3:çox gözəldir}. || secondly, [firstly|however] | the spring scenery | is very beautiful.",
"{1:Bundan əlavə}, {2:günəşli hava} {3:əhvalımı yaxşılaşdırır}. || in addition, [for example|because] | sunny weather | improves my mood.",
"{1:Digər tərəfdən}, {2:bəzi insanlar} {3:soyuq və şaxtalı günləri} {2:sevir}. || on the other hand, [firstly|in addition] | some people love | cold and freezing days.",
"{1:Bu doğru ola bilər}, {2:amma} {3:soyuq havada} {4:xəstələnmək asandır}. || that's true, | but | it is easy to get sick | in cold weather.",
"{1:Yekun olaraq}, {2:məncə}, {3:mülayim yaz havası} {4:ən yaxşı hava şəraitidir}. || to sum up, [firstly|for example] | I think | mild spring weather | is the best weather condition."
]},
{ grade: 8, unit: 4, q: "How do you think bad manners affect other people?", units: [
"{1:Məncə}, {2:pis davranış} {3:başqa insanları} {2:çox incidə bilər}. || in my opinion, [however|because] | bad manners can offend | other people.",
"{1:Birincisi}, {2:kobud davranış} {3:insanları narahat edir}. || firstly, [however|finally] | rude behaviour | disturbs people.",
"{1:Məsələn}, {2:metroda} {3:yüksək səslə danışmaq} {4:nəzakətsizdir}. || for example, [moreover|finally] | on the subway, | talking loudly | is impolite.",
"{1:İkincisi}, {2:bəzi pis vərdişlər} {3:infeksiya yaya bilər}. || secondly, [firstly|however] | some bad habits | can spread an infection.",
"{1:Məsələn}, {2:asqıranda} {3:ağzını örtməlisən}. || for example, [because|in addition] | when you sneeze, | you should cover your mouth.",
"{1:Bundan əlavə}, {2:insanların sözünü kəsmək} {3:hörmətsizlikdir}. || in addition, [for example|firstly] | interrupting people | is disrespectful.",
"{1:Digər tərəfdən}, {2:nəzakətli davranış} {3:insanları xoşbəxt edir}. || on the other hand, [firstly|in addition] | polite behaviour | makes people happy.",
"{1:Yekun olaraq}, {2:mən inanıram ki}, {3:yaxşı davranış} {4:hər kəsə hörmət göstərməyin yoludur}. || to sum up, [firstly|for example] | I believe that | good manners | are a way to show respect to everyone."
]},
{ grade: 8, unit: 5, q: "What type of house would you prefer to live in? Why?", units: [
"{1:Mən} {2:kəndin yaxınlığında} {1:kiçik, rahat bir evdə yaşamağı üstün tuturam}. || I would prefer to live in a small, cosy house | near a village.",
"{1:Birincisi}, {2:kənd} {3:dinc və sakitdir}. || firstly, [however|finally] | a village | is peaceful and quiet.",
"{1:Məsələn}, {2:orada} {3:tıxac yoxdur}. || for example, [moreover|finally] | there | is no traffic.",
"{1:İkincisi}, {2:evin ətrafındakı mənzərə} {3:çox gözəl olardı}. || secondly, [firstly|however] | the landscape around the house | would be very beautiful.",
"{1:Bundan əlavə}, {2:ev} {3:günəş enerjisi ilə işləyə bilər}. || in addition, [for example|because] | the house | can run on solar power.",
"{1:Digər tərəfdən}, {2:kənddə} {3:bəzi müasir rahatlıqlar yoxdur}. || on the other hand, [firstly|in addition] | in a village | there are no modern conveniences.",
"{1:Bu doğru ola bilər}, {2:amma} {3:mənə} {4:çox şey lazım deyil}. || that's true, | but | I don't need | a lot of things.",
"{1:Yekun olaraq}, {2:məncə}, {3:kiçik kənd evi} {4:rahat həyat üçün mükəmməl yerdir}. || to sum up, [firstly|for example] | I think | a small village house | is a perfect place for a relaxing life."
]},
{ grade: 8, unit: 5, q: "The best place to relax in my hometown", units: [
"{1:Doğma şəhərimdə} {3:istirahət üçün ən yaxşı yer} {2:dənizkənarı parkdır}. || in my hometown, | the seaside park | is the best place to relax.",
"{1:Birincisi}, {2:park} {3:evimə yaxındır}. || firstly, [however|finally] | the park | is near my house.",
"{1:Ona görə də} {2:hər həftəsonu} {3:ora piyada gedə bilirəm}. || that's why | every weekend | I can walk there.",
"{1:İkincisi}, {2:orada} {3:sərin meh} {4:və gözəl mənzərə var}. || secondly, [firstly|however] | there is | a cool breeze | and beautiful scenery.",
"{1:Məsələn}, {2:sahildə oturub} {3:gəmiləri seyr edə bilərsən}. || for example, [moreover|finally] | you can sit on the shore | and watch the ships.",
"{1:Bundan əlavə}, {2:park} {3:çox baxımlıdır}. || in addition, [for example|because] | the park | is very well-kept.",
"{1:Digər tərəfdən}, {2:həftəsonları} {3:park izdihamlı olur}. || on the other hand, [firstly|in addition] | at the weekend | the park is crowded.",
"{1:Yekun olaraq}, {2:mən inanıram ki}, {3:dənizkənarı park} {4:şəhərimizin ən gözəl yeridir}. || to sum up, [firstly|for example] | I believe that | the seaside park | is the most beautiful place in our city."
]},
{ grade: 8, unit: 6, q: "Why I want to become a change-maker", units: [
"{1:Mən dəyişiklik yaradan insan olmaq istəyirəm}, {2:çünki dünyanı daha yaxşı yerə çevirmək istəyirəm}. || I want to become a change-maker | because I want to make the world a better place.",
"{1:Birincisi}, {2:icmamızda} {3:çox problem var}. || firstly, [however|finally] | there are a lot of problems | in our community.",
"{1:Məsələn}, {2:çimərliklərdə} {3:çoxlu plastik tullantı var}. || for example, [moreover|finally] | there is a lot of plastic waste | on the beaches.",
"{1:Mən dostlarımla birləşib} {2:çimərlikdə təmizlik aksiyası təşkil etmək istəyirəm}. || I want to team up with my friends | and organise a beach clean-up.",
"{1:İkincisi}, {2:qaçqın uşaqlar} {3:təhsil almaq imkanına} {2:ehtiyac duyurlar}. || secondly, [firstly|however] | refugee children need | an opportunity to get an education.",
"{1:Bundan əlavə}, {2:onlar üçün} {3:pul toplamaq istəyirəm}. || in addition, [for example|because] | I want to raise money | for them.",
"{1:Digər tərəfdən}, {2:dəyişiklik yaratmaq} {3:asan deyil}. || on the other hand, [firstly|in addition] | being a change-maker | is not easy.",
"{1:Yekun olaraq}, {2:mən inanıram ki}, {3:adi insanlar da} {4:fərq yarada bilər}. || to sum up, [firstly|for example] | I believe that | ordinary people | can make a difference."
]},
{ grade: 8, unit: 1, q: "Why do people enjoy free time activities?", units: [
"{1:İnsanlar boş vaxt fəaliyyətlərindən həzz alırlar}, {2:çünki onlar gündəlik iş rejimindən fərqlidir}. || people enjoy free time activities | because they are different from their daily routine.",
"{1:Birincisi}, {2:hobbilər} {3:psixi sağlamlıq üçün} {2:faydalıdır}. || firstly, [however|finally] | hobbies are beneficial | for mental health.",
"{1:Məsələn}, {2:bağçılıq} {3:çox rahatladıcıdır}. || for example, [moreover|finally] | gardening | is very relaxing.",
"{1:İkincisi}, {2:hobbilər} {3:yaradıcılığı və diqqəti cəmləməyi} {2:inkişaf etdirir}. || secondly, [firstly|however] | hobbies improve | creativity and concentration.",
"{1:Məsələn}, {2:origami} {3:yaradıcılığı inkişaf etdirməyə kömək edir}. || for instance, [because|in addition] | origami | helps to develop creativity.",
"{1:Bundan əlavə}, {2:komanda oyunları} {3:ünsiyyət bacarıqlarını yaxşılaşdırır}. || in addition, [for example|firstly] | team games | improve communication skills.",
"{1:Digər tərəfdən}, {2:bəzi hobbilər} {3:təhlükəli ola bilər}, {4:ona görə də təhlükəsizlik qaydalarına əməl etməlisən}. || on the other hand, [firstly|in addition] | some hobbies | can be dangerous, | so you must follow safety rules.",
"{1:Yekun olaraq}, {2:məncə}, {3:boş vaxt fəaliyyətləri} {4:həyatımıza çox həzz gətirir}. || to sum up, [firstly|for example] | I think | free time activities | bring a lot of pleasure to our lives."
]},
/* ===================== 10-cu sinif ===================== */
{ grade: 10, unit: 1, q: "Why is kindness important?", units: [
"{1:Məncə}, {2:xeyirxahlıq} {4:həyatda} {3:ən vacib şeylərdən biridir}. || in my opinion, | kindness | is one of the most important things | in life.",
"{1:Birincisi}, {2:kiçik bir xeyirxahlıq} {3:kiminsə gününü dəyişə bilər}. || firstly, [however|finally] | a small act of kindness | can change someone's day.",
"{1:Məsələn}, {2:xoş bir söz} {4:kədərli bir dostu} {3:sevindirə bilər}. || for example, [moreover|finally] | a kind word | can cheer up | a sad friend.",
"{1:İkincisi}, {2:xeyirxahlığın} {3:dalğavari təsiri var}. || secondly, [firstly|however] | kindness | has a ripple effect.",
"{1:Kiməsə kömək edəndə}, {2:o da} {3:başqalarına kömək etmək istəyir}. || when you help someone, | they | want to help others too.",
"{1:Bundan əlavə}, {2:könüllülük} {3:özümüzə inamımızı artırır}. || in addition, [for example|because] | volunteering | improves our self-worth.",
"{1:Digər tərəfdən}, {2:xeyirxah olmaq} {3:mütləq} {4:pul tələb etmir}. || on the other hand, [firstly|in addition] | being kind | doesn't necessarily | cost money.",
"{1:Yekun olaraq}, {2:hamımız} {4:hər gün} {3:xeyirxah olmalıyıq}. || to sum up, [firstly|for example] | we all | should be kind | every day."
]},
{ grade: 10, unit: 2, q: "How did the victory change people's lives?", units: [
"{1:Qələbə} {3:insanların həyatına} {2:böyük sevinc gətirdi}. || the victory | brought immense joy | to people's lives.",
"{1:Birincisi}, {2:ordumuz} {3:torpaqlarımızı} {4:azad etdi}. || firstly, [however|finally] | our army | liberated | our lands.",
"{1:Nəticədə}, {2:insanlar} {3:evlərinə qayıda bilər}. || as a result, [for example|firstly] | people | can return to their homes.",
"{1:İkincisi}, {2:hamımız} {3:əsgərlərimizlə} {4:fəxr edirik}. || secondly, [firstly|however] | we all | are proud | of our soldiers.",
"{1:Məsələn}, {2:insanlar} {4:bayraqlarla} {3:küçələrə çıxdılar}. || for example, [moreover|finally] | people | went out into the streets | with flags.",
"{1:Bundan əlavə}, {2:şəhidlərimizin qəhrəmanlığı} {4:qəlbimizdə əbədi} {3:qalacaq}. || in addition, [for example|because] | the heroism of our martyrs | will remain | in our hearts forever.",
"{1:Bu gün} {2:biz} {4:Qələbə Gününü} {3:qeyd edirik}. || today | we | celebrate | Victory Day.",
"{1:Yekun olaraq}, {2:qələbə} {4:xalqımıza} {3:qürur və sevinc gətirdi}. || to sum up, [firstly|for example] | the victory | brought pride and joy | to our people."
]},
{ grade: 10, unit: 4, q: "Is deforestation a serious problem? If yes, what can we do to solve this problem?", units: [
"{1:Məncə}, {2:meşələrin qırılması} {3:ciddi problemdir}. || in my opinion, | deforestation | is a serious problem.",
"{1:Birincisi}, {2:ağaclar} {3:bizə} {4:təmiz hava} {3:verir}. || firstly, [however|finally] | trees | give us | clean air.",
"{1:İkincisi}, {2:bir çox heyvan} {3:yaşayış yerini itirir}. || secondly, [firstly|however] | many animals | lose their homes.",
"{1:Nəticədə}, {2:onlar} {3:yox olma təhlükəsi ilə üzləşirlər}. || as a result, [for example|firstly] | they | face extinction.",
"{1:Bu problemi həll etmək üçün} {2:biz} {3:daha çox ağac əkməliyik}. || to solve this problem, | we | should plant more trees.",
"{1:Bundan əlavə}, {2:biz} {3:daha az kağız istifadə etməliyik}. || in addition, [for example|because] | we | should use less paper.",
"{1:Məsələn}, {3:köhnə kitabları} {2:təkrar istifadə edə bilərik}. || for example, [moreover|finally] | we can reuse | old books.",
"{1:Yekun olaraq}, {2:hər kəs} {3:təbiəti qorumalıdır}. || to sum up, [firstly|for example] | everyone | should protect nature."
]},
{ grade: 10, unit: 5, q: "What are you doing today to achieve your goals?", units: [
"{1:Mənim məqsədim} {3:gələcəkdə} {2:həkim olmaqdır}. || my goal | is to become a doctor | in the future.",
"{1:Birincisi}, {2:hər gün} {3:çox çalışıram}. || firstly, [however|finally] | I work hard | every day.",
"{1:Məsələn}, {4:hər axşam} {3:iki saat} {2:oxuyuram}. || for example, [moreover|finally] | I study | for two hours | every evening.",
"{1:İkincisi}, {2:diqqətimi} {3:planıma cəmləyirəm}. || secondly, [firstly|however] | I focus | on my plan.",
"{2:Telefonun} {3:diqqətimi yayındırmasına} {1:icazə vermirəm}. || I don't let | my phone | distract me.",
"{1:Bundan əlavə}, {2:müsbət düşüncə tərzi} {3:mənə} {4:uğur qazanmağa} {3:kömək edir}. || in addition, [for example|because] | a positive mindset | helps me | succeed.",
"{1:Uğursuzluq} {2:son deyil}, {3:o, bir dərsdir}. || failure | is not the end, | it is a lesson.",
"{1:Yekun olaraq}, {2:hər gün səy göstərsəm}, {3:məqsədimə çatacağam}. || to sum up, [firstly|for example] | if I make an effort every day, | I will reach my goal."
]},
{ grade: 10, unit: 6, q: "Do you think modern lifestyles are healthy or not?", units: [
"{1:Məncə}, {2:müasir həyat tərzi} {3:sağlam deyil}. || in my opinion, | modern lifestyles | are not healthy.",
"{1:Birincisi}, {2:insanlar} {3:çox vaxt} {4:şəkərli içkilər içirlər}. || firstly, [however|finally] | people | often | drink sugary drinks.",
"{1:Bu içkilərdə} {2:çoxlu kalori var}. || these drinks | have a lot of calories.",
"{1:İkincisi}, {2:yeniyetmələr} {4:kifayət qədər} {3:yatmırlar}. || secondly, [firstly|however] | teenagers | don't sleep | enough.",
"{1:Nəticədə}, {2:onların} {3:məktəbdə problemləri olur}. || as a result, [for example|firstly] | they | have trouble at school.",
"{1:Digər tərəfdən}, {2:bəzi insanlar} {4:mütəmadi olaraq} {3:idman edirlər}. || on the other hand, [firstly|in addition] | some people | exercise | regularly.",
"{1:Onlar} {2:sağlam qidalar yeyir} {3:və formada qalırlar}. || they | eat healthy food | and keep fit.",
"{1:Yekun olaraq}, {2:sağlamlıq} {3:sərvətdir}. || to sum up, [firstly|for example] | health | is wealth."
]},
{ grade: 10, unit: 7, q: "What are the stages of life?", units: [
"{1:Həyatın} {2:müxtəlif mərhələləri var}. || life | has different stages.",
"{1:Birinci mərhələ} {2:uşaqlıqdır}. || the first stage | is childhood.",
"{1:Yeniyetməlik} {2:özünü kəşf etmə dövrüdür}. || adolescence | is a time of self-discovery.",
"{1:Məsələn}, {2:yeniyetmələr} {4:sınaq və səhv yolu ilə} {3:öyrənirlər}. || for example, [moreover|finally] | teenagers | learn | through trial and error.",
"{1:Yetkinlikdə} {2:insanlar} {3:özlərini təmin edirlər}. || in adulthood, | people | become self-sufficient.",
"{1:Onlar} {2:karyera qurur} {3:və ailə həyatına başlayırlar}. || they | pursue their careers | and start families.",
"{1:Təqaüddən sonra} {2:yaşlı insanlar} {3:təcrübələrini bölüşürlər}. || after retirement, | elderly people | share their experience.",
"{1:Yekun olaraq}, {2:həyatın hər mərhələsi} {3:dəyərlidir}. || to sum up, [firstly|for example] | every stage of life | is valuable."
]},
{ grade: 10, unit: 8, q: "What makes you happy?", units: [
"{1:Bir çox şey} {2:məni} {3:xoşbəxt edir}. || many things | make me | happy.",
"{1:Birincisi}, {3:ailəmlə və dostlarımla} {2:vaxt keçirməyi sevirəm}. || firstly, [however|finally] | I like spending time | with my family and friends.",
"{1:İkincisi}, {2:ehtiyacı olan insanlara kömək etmək} {3:məni xoşbəxt edir}. || secondly, [firstly|however] | helping people in need | makes me happy.",
"{1:Məsələn}, {2:keçən ay} {4:qonşumuza} {3:kömək etdim}. || for example, [moreover|finally] | last month | I helped | our neighbour.",
"{1:Bundan əlavə}, {2:kiçik şeylər} {3:əhvalımı yaxşılaşdırır}. || in addition, [for example|because] | small things | boost my mood.",
"{1:Məsələn}, {2:bir fincan çay} {3:və ya rahat otaq}. || for example, [moreover|finally] | a cup of tea | or a cosy room.",
"{1:Digər tərəfdən}, {2:tənhalıq} {3:məni bədbəxt edir}. || on the other hand, [firstly|in addition] | loneliness | makes me unhappy.",
"{1:Yekun olaraq}, {2:xoşbəxtlik} {3:seçimdir}. || to sum up, [firstly|for example] | happiness | is a choice."
]},
{ grade: 10, unit: 9, q: "Which types of media do you use most and why?", units: [
"{1:Mən} {3:ən çox} {2:sosial mediadan istifadə edirəm}. || I | use social media | most.",
"{1:Birincisi}, {2:o, mənə} {3:dostlarımla danışmağa} {2:kömək edir}. || firstly, [however|finally] | it helps me | talk to my friends.",
"{1:İkincisi}, {3:onlayn} {2:yeni şeylər öyrənə bilərəm}. || secondly, [firstly|however] | I can learn new things | online.",
"{1:Məsələn}, {3:maraqlı videolar} {2:izləyirəm}. || for example, [moreover|finally] | I watch | interesting videos.",
"{1:Digər tərəfdən}, {2:internetdəki xəbərlərin hamısı} {3:doğru deyil}. || on the other hand, [firstly|in addition] | not all the news on the Internet | is true.",
"{1:Bəziləri} {2:saxtadır}. || some of it | is fake.",
"{1:Buna görə də} {2:media savadlılığı} {3:çox vacibdir}. || that is why | media literacy | is very important.",
"{1:Yekun olaraq}, {2:mediadan} {3:ağıllı} {2:istifadə etməliyik}. || to sum up, [firstly|for example] | we should use the media | wisely."
]},
/* ===================== 11-ci sinif ===================== */
{ grade: 11, unit: 1, q: "Why is it important to ask questions?", units: [
"{1:Məncə}, {2:sual vermək} {4:həyatda} {3:ən vacib bacarıqlardan biridir}. || in my opinion, | asking questions | is one of the most important skills | in life.",
"{1:Birincisi}, {2:suallar} {4:biliyimizi} {3:genişləndirir}. || firstly, [however|finally] | questions | broaden | our knowledge.",
"{1:Məsələn}, {2:yaxşı suallar} {4:problemi dərindən araşdırmağa} {3:kömək edir}. || for example, [moreover|finally] | good questions | help you | dig into a problem.",
"{1:İkincisi}, {2:suallar} {4:maraq və tənqidi təfəkkür} {3:göstərir}. || secondly, [firstly|however] | questions | show | curiosity and critical thinking.",
"{1:Bundan əlavə}, {2:sual verən insanlar} {3:daha xoşagələndir}. || in addition, [for example|because] | people who ask questions | are more likeable.",
"{1:Digər tərəfdən}, {2:bəzi şagirdlər} {3:sual verməkdən utanırlar}. || on the other hand, [firstly|in addition] | some students | feel self-conscious about asking questions.",
"{1:Amma} {2:hətta mütəxəssislər də} {4:hər gün} {3:sual verirlər}. || but | even experts | ask questions | every day.",
"{1:Yekun olaraq}, {3:sual verməkdən} {2:çəkinməyin}. || to sum up, [firstly|for example] | don't hesitate | to ask questions."
]},
{ grade: 11, unit: 2, q: "What is the most memorable experience in your life?", units: [
"{1:Həyatımın ən unudulmaz təcrübəsi} {2:Norveçə səfərim idi}. || the most unforgettable experience of my life | was my trip to Norway.",
"{1:Birincisi}, {3:gecəyarısı günəşinin} {2:şahidi oldum}. || firstly, [however|finally] | I witnessed | the midnight sun.",
"{1:Bu}, {3:qütb bölgələrində baş verən} {2:təbiət hadisəsidir}. || it is | a natural phenomenon | that takes place in the polar regions.",
"{1:İkincisi}, {3:təlimatçı ilə} {2:cüt paraplan uçuşunu sınadım}. || secondly, [firstly|however] | I tried tandem paragliding | with an instructor.",
"{1:Əvvəlcə} {2:qorxdum}, {3:amma sonra} {4:mənzərəyə heyran qaldım}. || at first | I was afraid, | but then | I was amazed by the view.",
"{1:Mənzərə} {2:nəfəs kəsən idi}. || the landscape | was breathtaking.",
"{1:Bu səfər} {2:mənə} {3:hər anı qiymətləndirməyi} {2:öyrətdi}. || this trip | taught me | to appreciate every moment.",
"{1:Yekun olaraq}, {3:bu barədə} {2:canlı xatirələrim var}. || to sum up, [firstly|for example] | I have vivid memories | of it."
]},
{ grade: 11, unit: 3, q: "Do you prefer face-to-face conversations or online chats? Why?", units: [
"{1:Mən} {3:üzbəüz söhbətlərə} {2:üstünlük verirəm}. || I | prefer | face-to-face conversations.",
"{1:Birincisi}, {2:sözsüz ünsiyyət} {3:sözlər qədər vacibdir}. || firstly, [however|finally] | non-verbal communication | is as important as words.",
"{1:Məsələn}, {2:üz ifadələri} {3:hisslərimizi göstərir}. || for example, [moreover|finally] | facial expressions | show our feelings.",
"{1:İkincisi}, {3:mətn mesajını} {2:səhv anlamaq asandır}. || secondly, [firstly|however] | it is easy to misread | a text message.",
"{1:Nəticədə}, {2:bu} {3:anlaşılmazlığa səbəb ola bilər}. || as a result, [for example|firstly] | this | can lead to miscommunication.",
"{1:Digər tərəfdən}, {2:onlayn söhbətlər} {3:rahatdır}. || on the other hand, [firstly|in addition] | online chats | are convenient.",
"{1:Amma} {2:hər kəsin} {3:digər insanlarla real əlaqəyə ehtiyacı var}. || but | everyone | needs real connection with other people.",
"{1:Yekun olaraq}, {2:telefonlarımızı} {3:daha tez-tez} {2:kənara qoymalıyıq}. || to sum up, [firstly|for example] | we should set aside our phones | more often."
]},
{ grade: 11, unit: 4, q: "How should you choose a career?", units: [
"{1:Karyera seçmək} {3:həyatda} {2:ən vacib qərarlardan biridir}. || choosing a career | is one of the most important decisions | in life.",
"{1:Birincisi}, {3:müxtəlif işləri} {2:araşdırmalısan}. || firstly, [however|finally] | you should look into | different jobs.",
"{1:Məsələn}, {2:iş təcrübəsi} {4:iş haqqında öyrənmək üçün} {3:əla yoldur}. || for example, [moreover|finally] | work shadowing | is a great way | to learn about a job.",
"{1:İkincisi}, {3:dəyərlərin və güclü tərəflərin} {2:haqqında düşün}. || secondly, [firstly|however] | think about | your values and your strengths.",
"{1:Bundan əlavə}, {2:mentor da} {3:sənə kömək edə bilər}. || in addition, [for example|because] | a mentor | can also help you.",
"{1:Digər tərəfdən}, {2:əmək bazarı} {3:sürətlə dəyişir}. || on the other hand, [firstly|in addition] | the labour market | is changing fast.",
"{1:Buna görə də} {2:çevik olmalısan}. || that is why | you should be flexible.",
"{1:Yekun olaraq}, {2:gələcəyə bax} {3:və arzularının arxasınca get}. || to sum up, [firstly|for example] | look ahead | and pursue your dreams."
]},
{ grade: 11, unit: 5, q: "Who is a creative person you know?", units: [
"{1:Tanıdığım ən yaradıcı insan} {2:bacımdır}. || the most creative person I know | is my sister.",
"{1:Birincisi}, {2:o} {3:qeyri-standart düşünür}. || firstly, [however|finally] | she | thinks outside the box.",
"{1:Məsələn}, {2:o} {3:həmişə} {4:yeni fikirlər yaradır}. || for example, [moreover|finally] | she | always | generates new ideas.",
"{1:İkincisi}, {2:o} {3:həyatını} {4:sənətə} {3:həsr edir}. || secondly, [firstly|however] | she | devotes her life | to art.",
"{1:Onun rəsmləri} {2:çox təsiredicidir}. || her paintings | are very impressive.",
"{1:Bundan əlavə}, {2:o} {4:maneələrlə üzləşəndə} {3:təslim olmur}. || in addition, [for example|because] | she | doesn't give up | when she faces obstacles.",
"{1:Onun fikirləri} {2:bəzən} {3:absurd görünür}. || her ideas | sometimes | seem absurd.",
"{1:Yekun olaraq}, {2:o, mənə ilham verir} {3:ki, yaradıcı olum}. || to sum up, [firstly|for example] | she inspires me | to be creative."
]},
{ grade: 11, unit: 5, q: "Is graffiti art or not?", units: [
"{1:Qraffiti} {2:mübahisəli} {3:mövzudur}. || graffiti | is a controversial | issue.",
"{1:Bəzi insanlar düşünür ki}, {2:qraffiti} {3:sənətdir}. || some people think that | graffiti | is art.",
"{1:Məsələn}, {2:bəzi qraffitilər} {3:çox gözəl və yaradıcıdır}. || for example, [moreover|finally] | some graffiti | is very beautiful and creative.",
"{1:Digər tərəfdən}, {2:başqaları} {3:onu} {4:dağıdıcı} {3:hesab edir}. || on the other hand, [firstly|in addition] | others | think it | is destructive.",
"{1:Onlar} {3:qraffitini qanunsuzluqla} {2:əlaqələndirirlər}. || they | connect | graffiti with lawlessness.",
"{1:Bəzi ölkələrdə} {2:polis} {3:insanları qraffitiyə görə cərimələyir}. || in some countries, | the police | fine people for graffiti.",
"{1:Məncə}, {2:qraffiti} {4:icazə ilə} {3:sənət ola bilər}. || in my opinion, | graffiti | can be art | with permission.",
"{1:Yekun olaraq}, {2:hər şey} {3:yerdən asılıdır}. || to sum up, [firstly|for example] | everything | depends on the place."
]},
{ grade: 11, unit: 6, q: "Is social media addiction a serious problem?", units: [
"{1:Məncə}, {2:sosial media asılılığı} {3:ciddi problemdir}. || in my opinion, | social media addiction | is a serious problem.",
"{1:Birincisi}, {2:bir çox yeniyetmə} {3:daim telefonunu yoxlayır}. || firstly, [however|finally] | many teenagers | constantly check their phones.",
"{1:İkincisi}, {2:ekran qarşısında çox vaxt keçirmək} {3:zərərlidir}. || secondly, [firstly|however] | too much screen time | is harmful.",
"{1:Məsələn}, {2:o,} {3:bioloji saatımızı və yuxumuzu} {2:poza bilər}. || for example, [moreover|finally] | it can disrupt | our body clock and our sleep.",
"{1:Digər tərəfdən}, {2:rəqəmsal media} {3:bizə aktual qalmağa kömək edir}. || on the other hand, [firstly|in addition] | digital media | helps us stay up-to-date.",
"{1:Həmçinin o,} {2:bizə} {3:insanlarla əlaqə qurmağa} {2:kömək edir}. || it also | helps us | connect with people.",
"{1:Əsas məsələ} {2:mülayim istifadədir}. || the key | is moderate use.",
"{1:Yekun olaraq}, {3:onlayn keçirdiyimiz vaxta} {2:göz qoymalıyıq}. || to sum up, [firstly|for example] | we should keep an eye on | how much time we spend online."
]},
/* ===================== 7-ci sinif ===================== */
{ grade: 7, unit: 1, q: "What is your favorite TV show? Why?", units: [
"{1:Mənim ən sevdiyim verilişim} {2:kulinariya şousudur}. || my favorite TV show | is a cooking show.",
"{1:Mən onu} {3:hər həftə} {2:izləyirəm}. || I | watch it | every week.",
"{1:Birinci}, {2:ondan} {3:çox şey öyrənirəm}. || first, [however|finally] | I learn a lot | from it.",
"{1:Məsələn}, {3:yeni yeməklər} {2:bişirməyi öyrənirəm}. || for example, [however|because] | I learn how to make | new food.",
"{1:Bundan əlavə}, {2:verilişdəki insanlar} {3:çox gülməlidir}. || in addition, [for example|because] | the people on the show | are very funny.",
"{1:Ailəm də} {2:bu verilişi} {3:sevir}. || my family | also loves | this show.",
"{1:Biz onu} {2:cümə axşamları} {3:birlikdə izləyirik}. || we watch it | together | on Friday evenings.",
"{1:Yekun olaraq}, {2:bu, mənim} {3:ən sevdiyim verilişdir}. || in conclusion, [for example|however] | it is | my favorite show."
]},
{ grade: 7, unit: 2, q: "How was life in the past different?", units: [
"{1:Keçmişdə} {2:həyat} {3:çox fərqli idi}. || in the past, | life | was very different.",
"{1:Birinci}, {2:insanların} {3:telefonları yox idi}. || first, [however|finally] | people | didn't have phones.",
"{1:Onlar} {3:bir-birinə} {2:məktub yazırdılar}. || they | wrote letters | to each other.",
"{1:Bundan əlavə}, {2:səyahət etmək} {3:asan deyildi}. || in addition, [for example|because] | traveling | wasn't easy.",
"{1:Məsələn}, {2:Oreqon yolu ilə səyahət} {3:aylarla çəkirdi}. || for example, [however|because] | the journey on the Oregon Trail | took months.",
"{1:İnsanlar} {3:çöldə} {2:yatırdılar}. || people | slept | outside.",
"{1:Lakin}, {2:onlar} {3:axşamlar birlikdə mahnı oxuyurdular}. || however, [for example|finally] | they | sang songs together in the evening.",
"{1:Yekun olaraq}, {3:bu gün} {2:həyat daha asandır}. || in conclusion, [for example|however] | life is easier | today."
]},
{ grade: 7, unit: 3, q: "What do stories teach us?", units: [
"{1:Hekayələr} {3:bizə} {2:çox şey öyrədir}. || stories | teach | us a lot.",
"{1:Məsələn}, {2:təmsillərin} {3:əxlaqi mesajı var}. || for example, [however|finally] | fables | have a moral message.",
"{1:Meymun haqqında təmsildə} {2:heyvanlar} {3:səhv qərar verdilər}. || in the fable about the monkey, | the animals | made a bad decision.",
"{1:Onlar} {3:meymunu} {2:kral seçdilər}, {4:çünki o, rəqs etdi}. || they | made | the monkey king | because he danced.",
"{1:Lakin}, {2:meymun} {3:onları qoruya bilmədi}. || however, [for example|in addition] | the monkey | couldn't protect them.",
"{1:Bu hekayə} {3:bizə} {2:öyrədir ki}, {4:yaxşı lider ağıllı olmalıdır}. || this story | teaches | us that | a good leader should be clever.",
"{1:Bundan əlavə}, {2:hekayələr} {3:bizə cəsur olmağı öyrədir}. || in addition, [for example|because] | stories | teach us to be brave.",
"{1:Yekun olaraq}, {2:hekayələr} {3:vacibdir}. || in conclusion, [for example|however] | stories | are important."
]},
{ grade: 7, unit: 4, q: "What do you value most?", units: [
"{1:Mən} {3:ən çox} {2:ailəmi və dostlarımı dəyərləndirirəm}. || I | value my family and friends | most.",
"{1:Məncə}, {2:dostluq} {3:puldan daha vacibdir}. || in my opinion, [however|finally] | friendship | is more important than money.",
"{1:Dostluq} {2:pul tələb etmir}. || friendships | don't cost money.",
"{1:Məsələn}, {2:dostlarım} {3:çətin vaxtlarda} {4:mənə kömək edirlər}. || for example, [however|because] | my friends | help me | when I have problems.",
"{1:Bundan əlavə}, {2:ailəm} {3:həmişə yanımdadır}. || in addition, [for example|because] | my family | is always with me.",
"{1:Lakin}, {2:pul da} {3:vacibdir}. || however, [for example|finally] | money | is also important.",
"{1:Biz} {3:lazım olan şeylər üçün} {2:pul yığmalıyıq}. || we | should save money | for things we need.",
"{1:Yekun olaraq}, {2:insanlar} {3:puldan daha dəyərlidir}. || in conclusion, [for example|however] | people | are more important than money."
]},
{ grade: 7, unit: 5, q: "What is your dream house like?", units: [
"{1:Mənim xəyalımdakı ev} {3:dənizin yanında} {2:böyükdür}. || my dream house | is big | and it is next to the ocean.",
"{1:Onun} {2:böyük bir mətbəxi} {3:və rahat yataq otağı var}. || it has | a big kitchen | and a comfortable bedroom.",
"{1:Yataq otağımda} {2:böyük bir paltar şkafı} {3:və yazı masası var}. || in my bedroom, | there is a big wardrobe | and a desk.",
"{3:Divarlarda} {2:gözəl şəkillər} {1:var}. || there are | beautiful pictures | on the walls.",
"{1:Bundan əlavə}, {2:evin} {3:böyük həyəti var}. || in addition, [for example|because] | the house | has a big yard.",
"{1:Mən} {3:hər səhər} {2:yatağımı yığıram}. || I | make the bed | every morning.",
"{1:Ev işləri} {2:çətin deyil}, {3:çünki bütün ailə kömək edir}. || chores | aren't difficult | because all the family helps.",
"{1:Yekun olaraq}, {2:bu, mənim üçün} {3:mükəmməl evdir}. || in conclusion, [for example|however] | it is | the perfect house for me."
]},
{ grade: 7, unit: 6, q: "How can you stay safe at the beach?", units: [
"{1:Çimərliklər} {2:adətən} {3:təhlükəsiz yerlərdir}. || beaches | are usually | safe places.",
"{1:Lakin}, {2:qəzalar} {3:baş verə bilər}. || however, [for example|in addition] | accidents | can happen.",
"{1:Birinci}, {3:xilasedici olmayanda} {2:heç vaxt üzmə}. || first, [however|because] | never swim | when there isn't a lifeguard.",
"{1:Bundan əlavə}, {2:sınmış şüşəyə} {3:diqqət et}. || in addition, [for example|because] | be careful of | broken glass.",
"{1:Məsələn}, {3:şüşəyə basıb} {2:ayağını kəsə bilərsən}. || for example, [however|finally] | you can cut your foot | on some glass.",
"{1:Bəzi çimərliklərdə} {2:gizli təhlükələr var}. || some beaches | have hidden dangers.",
"{1:Bataqlıq qumda} {2:sən} {3:çabalamamalısan}. || in quicksand, | you | shouldn't struggle.",
"{1:Yekun olaraq}, {2:çimərlikdə} {3:həmişə diqqətli ol}. || in conclusion, [for example|however] | always be careful | at the beach."
]},
{ grade: 7, unit: 7, q: "Are smartphones good for teenagers?", units: [
"{1:Məncə}, {2:smartfonlar} {3:yeniyetmələr üçün faydalıdır}. || in my opinion, [however|finally] | smartphones | are good for teenagers.",
"{1:Birinci}, {2:biz} {3:dostlarımıza} {4:mesaj göndərə bilərik}. || first, [however|because] | we | can send messages | to our friends.",
"{1:Məsələn}, {2:mən} {3:hər axşam} {4:dostumla video zəng edirəm}. || for example, [however|because] | I | have a video chat with my friend | every evening.",
"{1:Bundan əlavə}, {2:tətbiqlər} {3:öyrənməyə kömək edir}. || in addition, [for example|because] | apps | help us learn.",
"{1:Lakin}, {2:bəzi yeniyetmələr} {3:telefonlarını yerə qoya bilmirlər}. || however, [for example|in addition] | some teenagers | can't put their phones down.",
"{1:Onlar} {2:bütün gün} {3:ekrana baxırlar}. || they | look at their screens | all day.",
"{1:Bu} {2:sağlam deyil}. || this | isn't healthy.",
"{1:Yekun olaraq}, {2:telefonlardan} {3:ağıllı istifadə etməliyik}. || in conclusion, [for example|however] | we should use our phones | carefully."
]},
{ grade: 7, unit: 9, q: "What kind of music do you like? Why?", units: [
"{1:Mən} {3:ən çox} {2:pop musiqisini sevirəm}. || I | like pop music | most.",
"{1:Birinci}, {2:o} {3:çox şəndir}. || first, [however|finally] | it | is very happy.",
"{1:Mən} {3:hər gün} {2:qulaqcıqla musiqi dinləyirəm}. || I | listen to music with my headphones | every day.",
"{1:Bundan əlavə}, {2:mən} {3:gitara çalmağı öyrənirəm}. || in addition, [for example|because] | I | am learning the guitar.",
"{1:Qardaşım} {2:nağara çalır}. || my brother | plays the drums.",
"{1:Məsələn}, {2:biz} {3:evdə birlikdə} {4:musiqi çalırıq}. || for example, [however|finally] | we | play music | together at home.",
"{1:Lakin}, {2:atam} {3:klassik musiqini sevir}. || however, [for example|in addition] | my dad | loves classical music.",
"{1:Yekun olaraq}, {2:musiqi} {3:özümüzü ifadə etməyin əla yoludur}. || in conclusion, [for example|however] | music | is a great way to express yourself."
]},
/* ===================== 9-cu sinif ===================== */
{ grade: 9, unit: 1, q: "Why is it important to know your mother tongue?", units: [
"{1:Məncə}, {2:ana dilini bilmək} {3:çox vacibdir}. || in my opinion, | knowing your mother tongue | is essential.",
"{1:Birinci}, {2:ana dili} {3:kimliyimizin} {4:böyük hissəsidir}. || first, [however|finally] | your mother tongue | is a big part | of your identity.",
"{1:O}, {3:mədəni irsimizi} {2:yaşatmağa kömək edir}. || it | helps you keep | your cultural heritage alive.",
"{1:Məsələn}, {2:yaşlı ailə üzvləri ilə} {3:asanlıqla danışa bilərik}. || for example, [however|because] | we can talk easily | with older family members.",
"{1:Ana dilini bilən uşaqlar} {2:daha sürətli öyrənirlər}. || children who are good at their mother tongue | learn faster.",
"{1:Həmçinin}, {2:ana dilində səlis danışmaq} {3:başqa dilləri öyrənməyi asanlaşdırır}. || also, [however|finally] | being fluent in your mother tongue | makes learning other languages easier.",
"{1:Buna görə də} {2:ana dilimizi} {3:dəyərləndirməliyik}. || that is why | we should value | our mother tongue.",
"{1:Ana dilini bilməmək} {2:millət qarşısında böyük nöqsandır}. || not to know a mother tongue | is a great fault before the nation."
]},
{ grade: 9, unit: 1, q: "How can you learn a foreign language?", units: [
"{1:Xarici dil öyrənmək} {2:çətin ola bilər}. || learning a foreign language | can be challenging.",
"{1:Lakin}, {2:poliqlotların} {3:faydalı məsləhətləri var}. || however, [for example|because] | polyglots | have useful advice.",
"{1:Birinci}, {3:yeni sözləri} {2:kiçik hissələrlə öyrən}. || first, [however|finally] | learn new words | in small chunks.",
"{1:Məsələn}, {2:hər səhər} {3:15 dəqiqə tez oyan}. || for example, [however|because] | every morning, | wake up 15 minutes earlier.",
"{1:Həmçinin}, {2:səhv etməkdən} {3:qorxma}. || also, [however|for example] | don't be afraid | of making mistakes.",
"{1:Mütəmadi olaraq} {2:məşq et}. || practise | regularly.",
"{1:Nəhayət}, {2:səbirli ol}. || finally, [for example|because] | be patient.",
"{1:Buna görə də}, {2:səbir} {3:çox vacibdir}. || that is why | patience | is very important."
]},
{ grade: 9, unit: 2, q: "Why is reading important?", units: [
"{1:Məncə}, {2:mütaliə} {3:çox vacibdir}. || in my opinion, | reading | is essential.",
"{1:Birinci}, {2:mütaliə} {3:beyin üçün məşqdir}. || first, [however|finally] | reading | is a workout for your brain.",
"{1:O}, {2:diqqət müddətini} {3:yaxşılaşdırır}. || it | improves | your attention span.",
"{1:Həmçinin}, {2:mütaliə} {3:savadlılığımızı artırır}. || also, [however|for example] | reading | improves our literacy.",
"{1:Məsələn}, {2:bədii kitablar} {3:bizi maraqlı macəralara aparır}. || for example, [however|because] | fiction books | take us on amazing adventures.",
"{1:Onlar} {3:özümüzü başqalarının yerinə qoymağa} {2:kömək edir}. || they | help us | put ourselves in other people's shoes.",
"{1:Bundan başqa}, {2:mütaliə} {3:ümumi biliyimizi artırır}. || also, [however|finally] | reading | increases general knowledge.",
"{1:Buna görə də} {2:biz} {3:mütəmadi olaraq oxumalıyıq}. || that is why | we | should read regularly."
]},
{ grade: 9, unit: 3, q: "Do you believe in superstitions? Why or why not?", units: [
"{1:Mən} {2:mövhumata} {3:inanmıram}. || I | don't believe | in superstitions.",
"{1:Məncə}, {2:mövhumatların} {3:doğru olma ehtimalı azdır}. || in my opinion, | superstitions | are unlikely to be true.",
"{1:Məsələn}, {2:bəzi insanlar} {3:heç vaxt nərdivanın altından keçmir}. || for example, [however|because] | some people | never walk under a ladder.",
"{1:Lakin}, {2:bu} {3:heç nəyi dəyişmir}. || however, [for example|finally] | this | doesn't change anything.",
"{1:Nənəm} {2:çox mövhumatçıdır}. || my grandmother | is very superstitious.",
"{1:O}, {3:hər şeyə} {2:inanır}. || she | believes | in everything.",
"{1:Həmçinin}, {2:intuisiyaya həmişə güvənmək} {3:yaxşı deyil}. || also, [however|for example] | relying on your intuition all the time | is not good.",
"{1:Buna görə də} {2:mən} {3:faktlara inanıram}. || that is why | I | believe in facts."
]},
{ grade: 9, unit: 4, q: "Would you like to live on Mars? Why or why not?", units: [
"{1:Mən} {2:Marsda} {3:yaşamaq istəməzdim}. || I | wouldn't like | to live on Mars.",
"{1:Birinci}, {2:Marsda} {3:su yoxdur}. || first, [however|finally] | water | is not available on Mars.",
"{1:Həmçinin}, {2:orada} {3:çox soyuqdur}. || also, [however|for example] | it | is very cold there.",
"{1:Astronavtlar} {3:təcrid vəziyyətinin} {2:öhdəsindən gəlməli olardılar}. || astronauts | would have to cope with | isolation.",
"{1:Onlar} {3:ailələrindən} {2:çox uzaqda olardılar}. || they | would be far away | from their families.",
"{1:Lakin}, {2:Marsı tədqiq etmək} {3:maraqlı olardı}. || however, [for example|because] | exploring Mars | would be exciting.",
"{1:Alimlər} {3:hələ də} {2:tədqiqat aparırlar}. || scientists | are doing research | now.",
"{1:Buna görə də} {2:bəlkə bir gün} {3:insanlar Marsda yaşayacaq}. || that is why | maybe one day | people will live on Mars."
]},
{ grade: 9, unit: 5, q: "How do people express themselves through art?", units: [
"{1:İnsanlar} {3:sənət vasitəsilə} {2:özlərini ifadə edirlər}. || people | express themselves | through art.",
"{1:Məsələn}, {2:bəzi uşaqlar} {3:rəsm çəkməklə} {4:özlərini ifadə edirlər}. || for example, [however|finally] | some children | express themselves | through drawing pictures.",
"{1:Aelita Andre} {2:çox gənc rəssamdır}. || Aelita Andre | is a very young artist.",
"{1:O}, {3:böyük kətan üzərində} {2:rəsm çəkir}. || she | paints | on a big canvas.",
"{1:Onun valideynləri} {2:onu} {3:həvəsləndirir}. || her parents | encourage | her.",
"{1:Həmçinin}, {2:bəzi rəssamlar} {3:divar rəsmləri çəkirlər}. || also, [however|because] | some artists | paint murals.",
"{1:İnsanlar} {2:onların rəsmlərinə} {3:heyran qalırlar}. || people | admire | their paintings.",
"{1:Buna görə də}, {2:sənət} {3:çox vacibdir}. || that is why | art | is very important."
]},
{ grade: 9, unit: 6, q: "What soft skills are important for teenagers?", units: [
"{1:Məncə}, {2:yumşaq bacarıqlar} {3:yeniyetmələr üçün çox vacibdir}. || in my opinion, | soft skills | are very important for teenagers.",
"{1:Birinci}, {2:müsbət yanaşma} {3:öyrənməyə kömək edir}. || first, [however|finally] | a positive attitude | helps you learn.",
"{1:Uğursuz olanda} {2:məyus olma}. || when you fail, | don't be disappointed.",
"{1:Həmçinin}, {2:tənqidi təfəkkür} {3:çox vacibdir}. || also, [however|for example] | critical thinking | is very important.",
"{1:Məsələn}, {3:problemə} {2:hər tərəfdən baxa bilərsən}. || for example, [however|because] | you can look | at the problem from every angle.",
"{1:Emosional zəka} {3:başqalarının hisslərini} {2:anlamağa kömək edir}. || emotional intelligence | helps you understand | the feelings of other people.",
"{1:Yaxşı dostlar} {2:bir-birini} {3:dəstəkləyir}. || good friends | support | each other.",
"{1:Buna görə də} {2:biz} {3:yumşaq bacarıqlarımızı inkişaf etdirməliyik}. || that is why | we | should improve our soft skills."
]},
{ grade: 9, unit: 6, q: "How do friends influence us?", units: [
"{1:Dostlar} {3:həyatımıza} {2:böyük təsir edə bilər}. || friends | can have a big influence | on our lives.",
"{1:Birinci}, {2:onlar} {3:qərarlarımıza} {4:təsir edə bilər}. || first, [however|finally] | they | can influence | our decisions.",
"{1:Məsələn}, {2:mən} {3:parkda} {4:dostlarımla vaxt keçirirəm}. || for example, [however|because] | I | hang out with my friends | in the park.",
"{1:Onlar} {3:çətin vaxtlarda} {2:məni dəstəkləyirlər}. || they | support me | when I have problems.",
"{1:Həmçinin}, {2:yaxşı dostlar} {3:müsbət yanaşmaya malikdir}. || also, [however|for example] | good friends | have a positive attitude.",
"{1:Lakin}, {2:bəzi dostlar} {3:pis təsir edə bilər}. || however, [for example|because] | some friends | can be a bad influence.",
"{1:Onlar} {3:bizi} {2:kədərləndirə bilərlər}. || they | can make | us sad.",
"{1:Buna görə də} {2:dostlarımızı} {3:diqqətlə seçməliyik}. || that is why | we should choose our friends | carefully."
]}



  ]
};
