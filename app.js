/* الإسلام وقانون الأحوال الشخصية — ISLAM & PERSONAL STATUS LAW — app.js v1.0 */
/* Based on the book by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام وقانون الأحوال الشخصية',
    splashSub: 'فقه الأسرة في ضوء الشريعة والقانون',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النساء ٤: ١',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabFamilyLaw: 'فقه الأسرة',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الكتاب',
    cardsDesc: '٢٠ بطاقة تستعرض أهم قضايا الأحوال الشخصية في الإسلام',
    familyLawTitle: 'فقه الأسرة المعاصر',
    familyLawDesc: 'كيف عالج الإسلام قضايا الأسرة بعدل ورحمة',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من تعاليم الكتاب',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'ماذا تعرف عن فقه الأسرة في الإسلام؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الأسرة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    problem: '⚖️ الإشكالية',
    solution: '☪️ الحل الإسلامي',
    splashFeatures: [
      '٢٠ بطاقة عن فقه الأسرة',
      'الزواج والطلاق والميراث والحضانة',
      'حقوق المرأة في الإسلام',
      'اختبار + أدعية يومية'
    ],
  },
  en: {
    appTitle: 'Islam & Personal Status Law',
    splashSub: 'Family law in the light of Sharia and modern legislation',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nisa 4:1',
    tabHome: 'Home', tabCards: 'Cards', tabFamilyLaw: 'Family Law',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Book Cards',
    cardsDesc: '20 cards exploring the most important personal status issues in Islam',
    familyLawTitle: 'Modern Family Jurisprudence',
    familyLawDesc: 'How Islam addressed family issues with justice and mercy',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book\'s teachings',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'What do you know about family law in Islam?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Family Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    problem: '⚖️ The Issue',
    solution: '☪️ The Islamic Solution',
    splashFeatures: [
      '20 cards on family jurisprudence',
      'Marriage, divorce, inheritance & custody',
      'Women\'s rights in Islam',
      'Quiz + daily duas'
    ],
  },
  fr: {
    appTitle: 'L\'Islam et le Droit de la Famille',
    splashSub: 'Le droit familial a la lumiere de la Charia et de la legislation moderne',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nisa 4:1',
    tabHome: 'Accueil', tabCards: 'Cartes', tabFamilyLaw: 'Droit Familial',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes du Livre',
    cardsDesc: '20 cartes explorant les questions les plus importantes du statut personnel en Islam',
    familyLawTitle: 'Jurisprudence Familiale Moderne',
    familyLawDesc: 'Comment l\'Islam a traite les questions familiales avec justice et misericorde',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees des enseignements du livre',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Que savez-vous du droit familial en Islam ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Famille',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    problem: '⚖️ La Problematique',
    solution: '☪️ La Solution Islamique',
    splashFeatures: [
      '20 cartes sur la jurisprudence familiale',
      'Mariage, divorce, heritage et garde',
      'Droits des femmes en Islam',
      'Quiz + duas quotidiennes'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'💍',
    ar:{title:'الزواج في الإسلام',desc:'الزواج ميثاق غليظ لا مجرد عقد مدني. يقوم على المودة والرحمة والسكينة بين الزوجين.',detail:'الغزالي يؤكد أن الإسلام جعل الزواج مؤسسة قائمة على الاحترام المتبادل، لا على التملك أو الهيمنة.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا',verseRef:'الروم ٣٠: ٢١',action:'تأمل في علاقتك الزوجية: هل تسودها المودة والرحمة؟'},
    en:{title:'Marriage in Islam',desc:'Marriage is a solemn covenant, not merely a civil contract. It is built on love, mercy, and tranquility between spouses.',detail:'Al-Ghazali emphasizes that Islam made marriage an institution based on mutual respect, not on possession or domination.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا',verseRef:'Ar-Rum 30:21',action:'Reflect on your marital relationship: is it governed by love and mercy?'},
    fr:{title:'Le Mariage en Islam',desc:'Le mariage est un pacte solennel, pas un simple contrat civil. Il est fonde sur l\'amour, la misericorde et la tranquillite entre epoux.',detail:'Al-Ghazali souligne que l\'Islam a fait du mariage une institution basee sur le respect mutuel, non sur la possession ou la domination.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا',verseRef:'Ar-Rum 30:21',action:'Reflechissez a votre relation conjugale : est-elle gouvernee par l\'amour et la misericorde ?'}
  },
  {
    id:2, emoji:'🤝',
    ar:{title:'رضا المرأة شرط',desc:'لا يصح زواج بلا رضا المرأة. الإسلام أعطى المرأة حق قبول أو رفض الزوج.',detail:'الغزالي يشدد على أن إجبار المرأة على الزواج مخالف للشريعة صراحةً.',verse:'لَا تَعْضُلُوهُنَّ',verseRef:'النساء ٤: ١٩',action:'هل تحترم إرادة المرأة في اختياراتها الشخصية؟'},
    en:{title:'Woman\'s Consent is Required',desc:'No marriage is valid without the woman\'s consent. Islam gave women the right to accept or reject a husband.',detail:'Al-Ghazali stresses that forcing a woman into marriage explicitly violates Islamic law.',verse:'لَا تَعْضُلُوهُنَّ',verseRef:'An-Nisa 4:19',action:'Do you respect women\'s will in their personal choices?'},
    fr:{title:'Le Consentement de la Femme est Requis',desc:'Aucun mariage n\'est valide sans le consentement de la femme. L\'Islam a donne aux femmes le droit d\'accepter ou de refuser un mari.',detail:'Al-Ghazali insiste sur le fait que forcer une femme au mariage viole explicitement la loi islamique.',verse:'لَا تَعْضُلُوهُنَّ',verseRef:'An-Nisa 4:19',action:'Respectez-vous la volonte des femmes dans leurs choix personnels ?'}
  },
  {
    id:3, emoji:'💰',
    ar:{title:'المهر حق للمرأة',desc:'المهر ليس ثمناً للمرأة بل هدية واجبة وتكريم لها. هو ملكها الخاص لا يشاركها فيه أحد.',detail:'الغزالي يوضح أن المهر رمز للاحترام والتقدير، وليس صفقة تجارية.',verse:'وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً',verseRef:'النساء ٤: ٤',action:'تعرّف على حقوق المهر في شريعة بلدك'},
    en:{title:'Mahr is the Woman\'s Right',desc:'The mahr is not a price for the woman but a mandatory gift honoring her. It is her personal property shared with no one.',detail:'Al-Ghazali explains that the mahr is a symbol of respect and appreciation, not a commercial transaction.',verse:'وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً',verseRef:'An-Nisa 4:4',action:'Learn about mahr rights in your country\'s legislation'},
    fr:{title:'La Dot est le Droit de la Femme',desc:'La dot n\'est pas un prix pour la femme mais un cadeau obligatoire l\'honorant. C\'est sa propriete personnelle que personne ne partage.',detail:'Al-Ghazali explique que la dot est un symbole de respect et d\'appreciation, pas une transaction commerciale.',verse:'وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً',verseRef:'An-Nisa 4:4',action:'Decouvrez les droits de la dot dans la legislation de votre pays'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'التعدد بشروط صارمة',desc:'التعدد مباح بشرط العدل التام. والعدل بين الزوجات شبه مستحيل كما قال القرآن.',detail:'الغزالي يرى أن التعدد رخصة لا أصل، وأن من لا يعدل فالواحدة أفضل.',verse:'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً',verseRef:'النساء ٤: ٣',action:'هل تفهم شروط التعدد الحقيقية في الإسلام؟'},
    en:{title:'Polygamy Under Strict Conditions',desc:'Polygamy is permitted only with complete justice. And justice between wives is nearly impossible, as the Quran states.',detail:'Al-Ghazali views polygamy as an exception, not a rule, and that one wife is better for those who cannot be just.',verse:'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً',verseRef:'An-Nisa 4:3',action:'Do you understand the real conditions for polygamy in Islam?'},
    fr:{title:'La Polygamie Sous Conditions Strictes',desc:'La polygamie n\'est permise qu\'avec une justice totale. Et la justice entre epouses est presque impossible, comme le dit le Coran.',detail:'Al-Ghazali considere la polygamie comme une exception, pas une regle, et qu\'une seule epouse est preferable pour ceux qui ne peuvent etre justes.',verse:'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً',verseRef:'An-Nisa 4:3',action:'Comprenez-vous les vraies conditions de la polygamie en Islam ?'}
  },
  {
    id:5, emoji:'💔',
    ar:{title:'الطلاق أبغض الحلال',desc:'الطلاق مباح لكنه أبغض الحلال عند الله. هو آخر الحلول لا أولها.',detail:'الغزالي يؤكد أن الإسلام وضع مراحل قبل الطلاق: النصيحة، الهجر، التحكيم، ثم الطلاق كملاذ أخير.',verse:'وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'النساء ٤: ٣٥',action:'هل تسعى للإصلاح قبل التفكير في الانفصال؟'},
    en:{title:'Divorce: The Most Disliked Permissible',desc:'Divorce is permitted but is the most disliked lawful act before God. It is the last resort, not the first.',detail:'Al-Ghazali affirms that Islam established stages before divorce: counsel, separation, arbitration, then divorce as a last resort.',verse:'وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'An-Nisa 4:35',action:'Do you seek reconciliation before thinking of separation?'},
    fr:{title:'Le Divorce : Le Plus Deteste des Permis',desc:'Le divorce est permis mais c\'est l\'acte licite le plus deteste par Dieu. C\'est le dernier recours, pas le premier.',detail:'Al-Ghazali affirme que l\'Islam a etabli des etapes avant le divorce : conseil, separation, arbitrage, puis divorce en dernier recours.',verse:'وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'An-Nisa 4:35',action:'Cherchez-vous la reconciliation avant de penser a la separation ?'}
  },
  {
    id:6, emoji:'👩‍⚖️',
    ar:{title:'حق المرأة في الخلع',desc:'إذا كرهت المرأة زوجها ولم تستطع الاستمرار، فلها حق الخلع. لا يجوز إجبارها على البقاء.',detail:'الغزالي يستدل بحديث زوجة ثابت بن قيس التي طلبت الفراق فأجابها النبي صلى الله عليه وسلم.',action:'تعرف على حق الخلع في قانون بلدك'},
    en:{title:'Woman\'s Right to Khul\'',desc:'If a woman dislikes her husband and cannot continue, she has the right to khul\' (dissolution). She cannot be forced to stay.',detail:'Al-Ghazali cites the hadith of the wife of Thabit ibn Qays who asked for separation and the Prophet granted it.',action:'Learn about the right of khul\' in your country\'s law'},
    fr:{title:'Le Droit de la Femme au Khul\'',desc:'Si une femme n\'aime plus son mari et ne peut continuer, elle a le droit au khul\' (dissolution). Elle ne peut etre forcee a rester.',detail:'Al-Ghazali cite le hadith de l\'epouse de Thabit ibn Qays qui a demande la separation et le Prophete l\'a accordee.',action:'Decouvrez le droit au khul\' dans la loi de votre pays'}
  },
  {
    id:7, emoji:'👶',
    ar:{title:'حضانة الأطفال',desc:'الحضانة للأم أولاً ما لم يكن هناك مانع شرعي. مصلحة الطفل فوق كل اعتبار.',detail:'الغزالي يشدد على أن الطفل ليس ملكاً لأحد الوالدين بل أمانة يجب رعايتها.',verse:'لَا تُضَارَّ وَالِدَةٌ بِوَلَدِهَا وَلَا مَوْلُودٌ لَّهُ بِوَلَدِهِ',verseRef:'البقرة ٢: ٢٣٣',action:'هل تضع مصلحة الأطفال أولاً في قراراتك الأسرية؟'},
    en:{title:'Child Custody',desc:'Custody goes to the mother first unless there is a legitimate impediment. The child\'s welfare is above all considerations.',detail:'Al-Ghazali stresses that a child is not property of either parent but a trust that must be cared for.',verse:'لَا تُضَارَّ وَالِدَةٌ بِوَلَدِهَا وَلَا مَوْلُودٌ لَّهُ بِوَلَدِهِ',verseRef:'Al-Baqarah 2:233',action:'Do you put children\'s welfare first in your family decisions?'},
    fr:{title:'La Garde des Enfants',desc:'La garde revient d\'abord a la mere sauf empechement legitime. Le bien-etre de l\'enfant prime sur toute consideration.',detail:'Al-Ghazali insiste sur le fait que l\'enfant n\'est la propriete d\'aucun parent mais un depot qui doit etre soigne.',verse:'لَا تُضَارَّ وَالِدَةٌ بِوَلَدِهَا وَلَا مَوْلُودٌ لَّهُ بِوَلَدِهِ',verseRef:'Al-Baqarah 2:233',action:'Mettez-vous le bien-etre des enfants en premier dans vos decisions familiales ?'}
  },
  {
    id:8, emoji:'📜',
    ar:{title:'الميراث بالعدل',desc:'نظام الميراث في الإسلام يراعي المسؤوليات المالية. المرأة ترث وتملك مالها بالكامل.',detail:'الغزالي يوضح أن حصة المرأة الأقل في بعض الحالات يقابلها عدم تحملها للنفقة الواجبة على الرجل.',verse:'لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ',verseRef:'النساء ٤: ٧',action:'ادرس نظام الميراث الإسلامي بموضوعية'},
    en:{title:'Inheritance with Justice',desc:'Islam\'s inheritance system considers financial responsibilities. Women inherit and fully own their wealth.',detail:'Al-Ghazali explains that women\'s smaller share in some cases is offset by them not bearing the mandatory financial support that falls on men.',verse:'لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ',verseRef:'An-Nisa 4:7',action:'Study the Islamic inheritance system objectively'},
    fr:{title:'L\'Heritage avec Justice',desc:'Le systeme d\'heritage en Islam tient compte des responsabilites financieres. Les femmes heritent et possedent entierement leurs biens.',detail:'Al-Ghazali explique que la part plus petite des femmes dans certains cas est compensee par le fait qu\'elles ne portent pas la charge financiere obligatoire qui incombe aux hommes.',verse:'لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ',verseRef:'An-Nisa 4:7',action:'Etudiez le systeme d\'heritage islamique objectivement'}
  },
  {
    id:9, emoji:'👩‍💼',
    ar:{title:'عمل المرأة',desc:'الإسلام لم يحرم عمل المرأة. خديجة كانت تاجرة ناجحة قبل الإسلام وبعده.',detail:'الغزالي يدافع عن حق المرأة في العمل والتعلم، ويرى أن تقييده بدعة لا أصل لها.',action:'هل تدعم تعليم وعمل المرأة في محيطك؟'},
    en:{title:'Women\'s Right to Work',desc:'Islam did not prohibit women from working. Khadijah was a successful merchant before and after Islam.',detail:'Al-Ghazali defends women\'s right to work and education, and views restricting it as an innovation with no basis.',action:'Do you support women\'s education and work in your community?'},
    fr:{title:'Le Droit des Femmes au Travail',desc:'L\'Islam n\'a pas interdit aux femmes de travailler. Khadijah etait une marchande prospere avant et apres l\'Islam.',detail:'Al-Ghazali defend le droit des femmes au travail et a l\'education, et considere sa restriction comme une innovation sans fondement.',action:'Soutenez-vous l\'education et le travail des femmes dans votre communaute ?'}
  },
  {
    id:10, emoji:'🏫',
    ar:{title:'تعليم المرأة فريضة',desc:'طلب العلم فريضة على كل مسلم ومسلمة. لا فرق بين الرجل والمرأة في هذا الحق.',detail:'الغزالي يستنكر حرمان المرأة من التعليم ويعتبره جريمة في حق الأمة.',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٣٩: ٩',action:'ساهم في تعليم فتاة أو امرأة في محيطك'},
    en:{title:'Women\'s Education is Obligatory',desc:'Seeking knowledge is obligatory for every Muslim, male and female. There is no difference between men and women in this right.',detail:'Al-Ghazali condemns depriving women of education and considers it a crime against the nation.',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9',action:'Contribute to educating a girl or woman in your community'},
    fr:{title:'L\'Education des Femmes est Obligatoire',desc:'La recherche du savoir est obligatoire pour tout musulman, homme ou femme. Il n\'y a aucune difference entre les hommes et les femmes dans ce droit.',detail:'Al-Ghazali condamne la privation des femmes d\'education et la considere comme un crime contre la nation.',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9',action:'Contribuez a l\'education d\'une fille ou d\'une femme dans votre communaute'}
  },
  {
    id:11, emoji:'🛡️',
    ar:{title:'النفقة واجبة على الرجل',desc:'النفقة على الزوجة والأولاد واجبة على الرجل. هذا حق شرعي لا منّة.',detail:'الغزالي يؤكد أن تقصير الرجل في النفقة إثم عظيم حتى لو كانت المرأة غنية.',action:'هل تؤدي واجب النفقة بسخاء وطيب نفس؟'},
    en:{title:'Financial Support is the Man\'s Duty',desc:'Financial support for wife and children is mandatory for the man. This is a legal right, not a favor.',detail:'Al-Ghazali affirms that a man\'s failure to provide is a great sin even if the wife is wealthy.',action:'Do you fulfill your duty of financial support generously and willingly?'},
    fr:{title:'La Pension est le Devoir de l\'Homme',desc:'Le soutien financier pour l\'epouse et les enfants est obligatoire pour l\'homme. C\'est un droit legal, pas une faveur.',detail:'Al-Ghazali affirme que le manquement de l\'homme a subvenir aux besoins est un grand peche meme si la femme est riche.',action:'Remplissez-vous votre devoir de soutien financier genereusement et volontiers ?'}
  },
  {
    id:12, emoji:'🏠',
    ar:{title:'القوامة مسؤولية لا سلطة',desc:'القوامة في الإسلام تعني المسؤولية والرعاية، لا التسلط والاستبداد.',detail:'الغزالي يفسر القوامة بأنها قيادة خدمية كقيادة ربان السفينة: مسؤولية لا امتياز.',verse:'الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ',verseRef:'النساء ٤: ٣٤',action:'هل تمارس القوامة كمسؤولية أم كسلطة؟'},
    en:{title:'Qiwamah is Responsibility, Not Authority',desc:'Qiwamah (guardianship) in Islam means responsibility and care, not domination and tyranny.',detail:'Al-Ghazali interprets qiwamah as servant leadership, like a ship captain: responsibility, not privilege.',verse:'الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ',verseRef:'An-Nisa 4:34',action:'Do you practice guardianship as responsibility or authority?'},
    fr:{title:'La Qiwamah est Responsabilite, Pas Autorite',desc:'La qiwamah (tutelle) en Islam signifie responsabilite et soin, pas domination et tyrannie.',detail:'Al-Ghazali interprete la qiwamah comme un leadership de service, comme un capitaine de navire : responsabilite, pas privilege.',verse:'الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ',verseRef:'An-Nisa 4:34',action:'Pratiquez-vous la tutelle comme responsabilite ou comme autorite ?'}
  },
  {
    id:13, emoji:'🤱',
    ar:{title:'حق الرضاعة',desc:'الأم لها حق إرضاع طفلها حولين كاملين، والأب ملزم بالنفقة خلال هذه الفترة.',detail:'الغزالي يوضح أن حق الرضاعة يحمي الأم والطفل معاً ويضمن الرعاية الكاملة.',verse:'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ',verseRef:'البقرة ٢: ٢٣٣',action:'ادعم حقوق الأمومة في مجتمعك'},
    en:{title:'Right to Breastfeeding',desc:'The mother has the right to breastfeed her child for two full years, and the father is obligated to provide during this period.',detail:'Al-Ghazali explains that breastfeeding rights protect both mother and child and ensure complete care.',verse:'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ',verseRef:'Al-Baqarah 2:233',action:'Support motherhood rights in your community'},
    fr:{title:'Le Droit a l\'Allaitement',desc:'La mere a le droit d\'allaiter son enfant pendant deux annees completes, et le pere est oblige de subvenir aux besoins pendant cette periode.',detail:'Al-Ghazali explique que les droits d\'allaitement protegent la mere et l\'enfant et assurent des soins complets.',verse:'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ',verseRef:'Al-Baqarah 2:233',action:'Soutenez les droits de la maternite dans votre communaute'}
  },
  {
    id:14, emoji:'📖',
    ar:{title:'الوصية في الإسلام',desc:'الوصية حق مكفول لا يتجاوز الثلث، وهي وسيلة لتحقيق العدالة الاجتماعية.',detail:'الغزالي يشجع على كتابة الوصية لضمان حقوق الجميع وتجنب النزاعات.',action:'هل كتبت وصيتك وفق الشريعة الإسلامية؟'},
    en:{title:'Wills in Islam',desc:'The will is a guaranteed right not exceeding one-third, and is a means to achieve social justice.',detail:'Al-Ghazali encourages writing a will to ensure everyone\'s rights and avoid disputes.',action:'Have you written your will according to Islamic law?'},
    fr:{title:'Le Testament en Islam',desc:'Le testament est un droit garanti ne depassant pas le tiers, et c\'est un moyen de realiser la justice sociale.',detail:'Al-Ghazali encourage la redaction d\'un testament pour garantir les droits de chacun et eviter les litiges.',action:'Avez-vous redige votre testament selon la loi islamique ?'}
  },
  {
    id:15, emoji:'🧕',
    ar:{title:'الحجاب حرية لا قيد',desc:'الحجاب خيار إيماني وليس أداة قمع. الإسلام يحترم حرية المرأة في التدين.',detail:'الغزالي يرفض إجبار المرأة على الحجاب بالقوة كما يرفض منعها منه بالقوة.',action:'هل تحترم خيارات المرأة الدينية دون إكراه؟'},
    en:{title:'Hijab is Freedom, Not Restriction',desc:'Hijab is a faith-based choice, not a tool of oppression. Islam respects women\'s freedom in religious practice.',detail:'Al-Ghazali rejects forcing women to wear hijab by force just as he rejects preventing them from it by force.',action:'Do you respect women\'s religious choices without coercion?'},
    fr:{title:'Le Hijab est Liberte, Pas Restriction',desc:'Le hijab est un choix de foi, pas un outil d\'oppression. L\'Islam respecte la liberte religieuse des femmes.',detail:'Al-Ghazali rejette de forcer les femmes a porter le hijab tout comme il rejette de les en empecher par la force.',action:'Respectez-vous les choix religieux des femmes sans contrainte ?'}
  },
  {
    id:16, emoji:'🔄',
    ar:{title:'تجديد قوانين الأسرة',desc:'القوانين يجب أن تتطور لتواكب العصر مع الحفاظ على ثوابت الشريعة.',detail:'الغزالي يدعو لتجديد الفقه وتحديث القوانين بما يحقق مقاصد الشريعة في حماية الأسرة.',action:'تابع جهود تحديث قوانين الأسرة في بلدك'},
    en:{title:'Modernizing Family Laws',desc:'Laws must evolve with the times while preserving the fundamentals of Sharia.',detail:'Al-Ghazali calls for renewing jurisprudence and updating laws to achieve Sharia\'s objectives in protecting the family.',action:'Follow efforts to modernize family laws in your country'},
    fr:{title:'Moderniser les Lois Familiales',desc:'Les lois doivent evoluer avec leur temps tout en preservant les fondamentaux de la Charia.',detail:'Al-Ghazali appelle au renouvellement de la jurisprudence et a la mise a jour des lois pour atteindre les objectifs de la Charia dans la protection de la famille.',action:'Suivez les efforts de modernisation des lois familiales dans votre pays'}
  },
  {
    id:17, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'حقوق الأيتام',desc:'الإسلام أولى الأيتام عناية خاصة. كفالة اليتيم من أعظم الأعمال عند الله.',detail:'الغزالي يذكر أن النبي صلى الله عليه وسلم قال: أنا وكافل اليتيم كهاتين في الجنة.',verse:'وَيَسْأَلُونَكَ عَنِ الْيَتَامَىٰ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ',verseRef:'البقرة ٢: ٢٢٠',action:'ساهم في كفالة يتيم أو دعم مؤسسة أيتام'},
    en:{title:'Orphans\' Rights',desc:'Islam gave orphans special care. Sponsoring an orphan is one of the greatest deeds before God.',detail:'Al-Ghazali mentions that the Prophet said: I and the sponsor of an orphan will be like these two in Paradise.',verse:'وَيَسْأَلُونَكَ عَنِ الْيَتَامَىٰ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ',verseRef:'Al-Baqarah 2:220',action:'Contribute to sponsoring an orphan or supporting an orphanage'},
    fr:{title:'Les Droits des Orphelins',desc:'L\'Islam a accorde aux orphelins une attention particuliere. Parrainer un orphelin est l\'une des plus grandes actions devant Dieu.',detail:'Al-Ghazali mentionne que le Prophete a dit : Moi et le parrain de l\'orphelin serons comme ces deux au Paradis.',verse:'وَيَسْأَلُونَكَ عَنِ الْيَتَامَىٰ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ',verseRef:'Al-Baqarah 2:220',action:'Contribuez au parrainage d\'un orphelin ou au soutien d\'un orphelinat'}
  },
  {
    id:18, emoji:'🤝',
    ar:{title:'الشورى في الأسرة',desc:'الأسرة المسلمة تُدار بالشورى لا بالاستبداد. كلا الزوجين شريك في القرار.',detail:'الغزالي يؤكد أن الشورى مبدأ قرآني يشمل الأسرة كما يشمل الدولة.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٤٢: ٣٨',action:'هل تستشير أهلك في القرارات المهمة؟'},
    en:{title:'Shura (Consultation) in Family',desc:'The Muslim family is managed by consultation, not tyranny. Both spouses are partners in decision-making.',detail:'Al-Ghazali affirms that consultation is a Quranic principle that applies to the family as much as to the state.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 42:38',action:'Do you consult your family in important decisions?'},
    fr:{title:'La Choura (Consultation) en Famille',desc:'La famille musulmane est geree par la consultation, pas la tyrannie. Les deux epoux sont partenaires dans la prise de decision.',detail:'Al-Ghazali affirme que la consultation est un principe coranique qui s\'applique a la famille autant qu\'a l\'Etat.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 42:38',action:'Consultez-vous votre famille dans les decisions importantes ?'}
  },
  {
    id:19, emoji:'⚡',
    ar:{title:'العنف الأسري محرم',desc:'الإسلام يحرم إيذاء الزوجة والأولاد. العنف الأسري جريمة شرعية وقانونية.',detail:'الغزالي يؤكد أن النبي صلى الله عليه وسلم لم يضرب امرأة قط ولا خادماً.',action:'ساهم في التوعية ضد العنف الأسري'},
    en:{title:'Domestic Violence is Forbidden',desc:'Islam forbids harming wives and children. Domestic violence is a crime both religiously and legally.',detail:'Al-Ghazali affirms that the Prophet never hit a woman or a servant.',action:'Contribute to awareness against domestic violence'},
    fr:{title:'La Violence Domestique est Interdite',desc:'L\'Islam interdit de nuire aux epouses et aux enfants. La violence domestique est un crime religieux et legal.',detail:'Al-Ghazali affirme que le Prophete n\'a jamais frappe une femme ni un serviteur.',action:'Contribuez a la sensibilisation contre la violence domestique'}
  },
  {
    id:20, emoji:'🌍',
    ar:{title:'الأسرة أساس المجتمع',desc:'المجتمع القوي يبدأ من أسرة قوية. حماية الأسرة حماية للأمة.',detail:'الغزالي يرى أن إصلاح قوانين الأحوال الشخصية هو المدخل لإصلاح المجتمع كله.',action:'ابدأ الإصلاح من بيتك وأسرتك'},
    en:{title:'Family is Society\'s Foundation',desc:'A strong society starts with a strong family. Protecting the family protects the nation.',detail:'Al-Ghazali believes that reforming personal status laws is the gateway to reforming all of society.',action:'Start reform from your home and family'},
    fr:{title:'La Famille est le Fondement de la Societe',desc:'Une societe forte commence par une famille forte. Proteger la famille, c\'est proteger la nation.',detail:'Al-Ghazali croit que la reforme des lois du statut personnel est la porte d\'entree pour reformer toute la societe.',action:'Commencez la reforme depuis votre foyer et votre famille'}
  }
];

// ═══════════════ FAMILY LAW DATA ═══════════════
const FAMILY_LAW_DATA = [
  {
    emoji:'👰',
    ar:{title:'اختيار الزوج',problem:'العائلات تفرض الزواج بدون إرادة الفتاة بحجة العادات والتقاليد',solution:'الإسلام يشترط رضا الطرفين. النبي ﷺ رد زواج فتاة أُجبرت عليه وخيّرها',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'البقرة ٢: ٢٥٦'},
    en:{title:'Choosing a Spouse',problem:'Families impose marriage without the girl\'s consent under the pretext of customs and traditions',solution:'Islam requires both parties\' consent. The Prophet annulled a marriage where a girl was forced and gave her the choice',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'Al-Baqarah 2:256'},
    fr:{title:'Choisir un Conjoint',problem:'Les familles imposent le mariage sans le consentement de la fille sous pretexte de coutumes et traditions',solution:'L\'Islam exige le consentement des deux parties. Le Prophete a annule un mariage force et a donne le choix a la fille',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'Al-Baqarah 2:256'}
  },
  {
    emoji:'💸',
    ar:{title:'المغالاة في المهور',problem:'المهور الباهظة تمنع الشباب من الزواج وتخلق أزمة اجتماعية',solution:'النبي ﷺ قال: أعظم النساء بركة أيسرهن مهراً. تبسيط الزواج من مقاصد الشريعة',verse:'وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ',verseRef:'النور ٢٤: ٣٢'},
    en:{title:'Excessive Dowries',problem:'Exorbitant dowries prevent young people from marrying and create a social crisis',solution:'The Prophet said: The most blessed women are those with the easiest dowries. Simplifying marriage is a Sharia objective',verse:'وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ',verseRef:'An-Nur 24:32'},
    fr:{title:'Les Dots Excessives',problem:'Les dots exorbitantes empechent les jeunes de se marier et creent une crise sociale',solution:'Le Prophete a dit : Les femmes les plus benies sont celles avec les dots les plus simples. Simplifier le mariage est un objectif de la Charia',verse:'وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ',verseRef:'An-Nur 24:32'}
  },
  {
    emoji:'👧',
    ar:{title:'زواج القاصرات',problem:'بعض المجتمعات تزوج الفتيات في سن مبكرة جداً بحجة الدين',solution:'الإسلام يشترط البلوغ والرشد والقدرة. زواج الأطفال يتعارض مع مقاصد الشريعة في حفظ النفس والعقل',verse:'وَابْتَلُوا الْيَتَامَىٰ حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ',verseRef:'النساء ٤: ٦'},
    en:{title:'Child Marriage',problem:'Some communities marry girls at a very young age under the pretext of religion',solution:'Islam requires maturity, sound mind, and capability. Child marriage contradicts Sharia\'s objectives of preserving life and intellect',verse:'وَابْتَلُوا الْيَتَامَىٰ حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ',verseRef:'An-Nisa 4:6'},
    fr:{title:'Le Mariage des Mineurs',problem:'Certaines communautes marient les filles a un tres jeune age sous pretexte de religion',solution:'L\'Islam exige la maturite, la raison et la capacite. Le mariage des enfants contredit les objectifs de la Charia de preservation de la vie et de l\'intellect',verse:'وَابْتَلُوا الْيَتَامَىٰ حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ',verseRef:'An-Nisa 4:6'}
  },
  {
    emoji:'⚖️',
    ar:{title:'حقوق المطلقة',problem:'المرأة المطلقة تعاني من الظلم الاجتماعي والمادي بعد الطلاق',solution:'الإسلام يكفل للمطلقة حق المتعة والنفقة والسكن خلال العدة وحضانة الأولاد',verse:'وَلِلْمُطَلَّقَاتِ مَتَاعٌ بِالْمَعْرُوفِ حَقًّا عَلَى الْمُتَّقِينَ',verseRef:'البقرة ٢: ٢٤١'},
    en:{title:'Divorcee\'s Rights',problem:'Divorced women suffer from social and financial injustice after divorce',solution:'Islam guarantees the divorcee the right to compensation, financial support, housing during the waiting period, and child custody',verse:'وَلِلْمُطَلَّقَاتِ مَتَاعٌ بِالْمَعْرُوفِ حَقًّا عَلَى الْمُتَّقِينَ',verseRef:'Al-Baqarah 2:241'},
    fr:{title:'Les Droits de la Divorcee',problem:'Les femmes divorcees souffrent d\'injustice sociale et financiere apres le divorce',solution:'L\'Islam garantit a la divorcee le droit a une compensation, un soutien financier, un logement pendant la periode d\'attente et la garde des enfants',verse:'وَلِلْمُطَلَّقَاتِ مَتَاعٌ بِالْمَعْرُوفِ حَقًّا عَلَى الْمُتَّقِينَ',verseRef:'Al-Baqarah 2:241'}
  },
  {
    emoji:'🏛️',
    ar:{title:'القضاء الأسري',problem:'محاكم الأسرة في كثير من الدول العربية بطيئة وغير عادلة',solution:'الإسلام يدعو لقضاء سريع وعادل. التحكيم الأسري مبدأ قرآني يجب تفعيله',verse:'فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'النساء ٤: ٣٥'},
    en:{title:'Family Courts',problem:'Family courts in many Arab countries are slow and unjust',solution:'Islam calls for swift and just judiciary. Family arbitration is a Quranic principle that must be activated',verse:'فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'An-Nisa 4:35'},
    fr:{title:'Les Tribunaux de la Famille',problem:'Les tribunaux de la famille dans de nombreux pays arabes sont lents et injustes',solution:'L\'Islam appelle a une justice rapide et equitable. L\'arbitrage familial est un principe coranique qui doit etre active',verse:'فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا',verseRef:'An-Nisa 4:35'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🤝',ar:{label:'المعاملة الحسنة مع الأهل',source:'الإسلام وقانون الأحوال الشخصية'},en:{label:'Treat family with kindness',source:'Islam & Personal Status Law'},fr:{label:'Traiter la famille avec bonte',source:'L\'Islam et le Droit Familial'}},
  {emoji:'💬',ar:{label:'شاور أهلك في قرار اليوم',source:'الشورى في الأسرة'},en:{label:'Consult your family on today\'s decisions',source:'Family consultation'},fr:{label:'Consulter votre famille sur les decisions du jour',source:'Consultation familiale'}},
  {emoji:'📖',ar:{label:'اقرأ آية عن الأسرة وتدبّرها',source:'فقه الأسرة'},en:{label:'Read & reflect on a verse about family',source:'Family jurisprudence'},fr:{label:'Lire et mediter un verset sur la famille',source:'Jurisprudence familiale'}},
  {emoji:'🙏',ar:{label:'ادعُ لأهلك بالخير',source:'أدعية الأسرة'},en:{label:'Pray for your family\'s wellbeing',source:'Family duas'},fr:{label:'Priez pour le bien-etre de votre famille',source:'Duas familiales'}},
  {emoji:'🎁',ar:{label:'أدخل السرور على أحد أفراد أسرتك',source:'المودة والرحمة'},en:{label:'Bring joy to a family member',source:'Love and mercy'},fr:{label:'Apporter de la joie a un membre de la famille',source:'Amour et misericorde'}},
  {emoji:'⚖️',ar:{label:'تعلّم حكماً فقهياً عن الأسرة',source:'التعلم المستمر'},en:{label:'Learn a ruling about family law',source:'Continuous learning'},fr:{label:'Apprendre une regle du droit familial',source:'Apprentissage continu'}},
  {emoji:'👶',ar:{label:'اقضِ وقتاً نوعياً مع الأطفال',source:'حقوق الأولاد'},en:{label:'Spend quality time with children',source:'Children\'s rights'},fr:{label:'Passer du temps de qualite avec les enfants',source:'Droits des enfants'}},
  {emoji:'🌙',ar:{label:'ادعُ دعاء الأسرة قبل النوم',source:'أذكار المساء'},en:{label:'Say the family dua before sleep',source:'Evening remembrance'},fr:{label:'Dire le dua familial avant le sommeil',source:'Rappels du soir'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل يشترط الإسلام رضا المرأة في الزواج؟',en:'Does Islam require the woman\'s consent for marriage?',fr:'L\'Islam exige-t-il le consentement de la femme pour le mariage ?'},
  {ar:'هل تعرف حقوق المرأة المالية في الإسلام؟',en:'Do you know women\'s financial rights in Islam?',fr:'Connaissez-vous les droits financiers des femmes en Islam ?'},
  {ar:'هل الطلاق أول حل عند الخلاف الزوجي؟',en:'Is divorce the first solution for marital disputes?',fr:'Le divorce est-il la premiere solution aux disputes conjugales ?'},
  {ar:'هل تعلم أن للمرأة حق الخلع في الإسلام؟',en:'Do you know women have the right to khul\' in Islam?',fr:'Savez-vous que les femmes ont le droit au khul\' en Islam ?'},
  {ar:'هل تفهم نظام الميراث الإسلامي ومنطقه؟',en:'Do you understand the Islamic inheritance system and its logic?',fr:'Comprenez-vous le systeme d\'heritage islamique et sa logique ?'},
  {ar:'هل تمارس الشورى في قراراتك الأسرية؟',en:'Do you practice consultation in your family decisions?',fr:'Pratiquez-vous la consultation dans vos decisions familiales ?'},
  {ar:'هل تعلم أن النفقة واجبة على الرجل حتى لو كانت المرأة غنية؟',en:'Do you know financial support is the man\'s duty even if the wife is wealthy?',fr:'Savez-vous que le soutien financier est le devoir de l\'homme meme si la femme est riche ?'},
  {ar:'هل ترفض العنف الأسري بكل أشكاله؟',en:'Do you reject domestic violence in all its forms?',fr:'Rejetez-vous la violence domestique sous toutes ses formes ?'},
  {ar:'هل تؤيد حق المرأة في التعليم والعمل؟',en:'Do you support women\'s right to education and work?',fr:'Soutenez-vous le droit des femmes a l\'education et au travail ?'},
  {ar:'هل تعرف الفرق بين القوامة والتسلط؟',en:'Do you know the difference between guardianship and domination?',fr:'Connaissez-vous la difference entre la tutelle et la domination ?'},
  {ar:'هل تساهم في حماية حقوق الأيتام؟',en:'Do you contribute to protecting orphans\' rights?',fr:'Contribuez-vous a la protection des droits des orphelins ?'},
  {ar:'هل تؤمن بضرورة تحديث قوانين الأسرة؟',en:'Do you believe in the necessity of modernizing family laws?',fr:'Croyez-vous en la necessite de moderniser les lois familiales ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء للزوجين',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'ربنا هب لنا من أزواجنا وذرياتنا قرة أعين'},en:{label:'Dua for Spouses',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'Our Lord, grant us from our spouses and offspring comfort to our eyes'},fr:{label:'Dua pour les Epoux',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'Notre Seigneur, accorde-nous de nos epoux et descendants la fraicheur des yeux'}},
  {ar:{label:'دعاء الذرية',text:'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً',tr:'رب هب لي من لدنك ذرية طيبة'},en:{label:'Dua for Children',text:'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً',tr:'My Lord, grant me from Yourself good offspring'},fr:{label:'Dua pour les Enfants',text:'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً',tr:'Mon Seigneur, accorde-moi de Ta part une bonne descendance'}},
  {ar:{label:'دعاء البركة',text:'اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ',tr:'اللهم بارك لهما وبارك عليهما واجمع بينهما في خير'},en:{label:'Dua for Blessing',text:'اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ',tr:'O God, bless them, bless upon them, and unite them in goodness'},fr:{label:'Dua pour la Benediction',text:'اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ',tr:'O Dieu, benis-les, benis sur eux, et unis-les dans le bien'}},
  {ar:{label:'دعاء التوفيق',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً',tr:'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة'},en:{label:'Dua for Success',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً',tr:'Our Lord, give us good in this world and good in the Hereafter'},fr:{label:'Dua pour le Succes',text:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً',tr:'Notre Seigneur, donne-nous le bien dans ce monde et le bien dans l\'Au-dela'}},
  {ar:{label:'دعاء الألفة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'اللهم ألف بين قلوبنا وأصلح ذات بيننا'},en:{label:'Dua for Harmony',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O God, unite our hearts and rectify our affairs'},fr:{label:'Dua pour l\'Harmonie',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Dieu, unis nos coeurs et rectifie nos affaires'}},
  {ar:{label:'دعاء الحفظ',text:'اللَّهُمَّ احْفَظْ أَهْلِي وَذُرِّيَّتِي مِن كُلِّ سُوءٍ',tr:'اللهم احفظ أهلي وذريتي من كل سوء'},en:{label:'Dua for Protection',text:'اللَّهُمَّ احْفَظْ أَهْلِي وَذُرِّيَّتِي مِن كُلِّ سُوءٍ',tr:'O God, protect my family and offspring from all evil'},fr:{label:'Dua pour la Protection',text:'اللَّهُمَّ احْفَظْ أَهْلِي وَذُرِّيَّتِي مِن كُلِّ سُوءٍ',tr:'O Dieu, protege ma famille et ma descendance de tout mal'}},
  {ar:{label:'دعاء الهداية',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',tr:'ربنا اغفر لنا ولإخواننا الذين سبقونا بالإيمان'},en:{label:'Dua for Guidance',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',tr:'Our Lord, forgive us and our brothers who preceded us in faith'},fr:{label:'Dua pour la Guidance',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ',tr:'Notre Seigneur, pardonne-nous ainsi qu\'a nos freres qui nous ont precedes dans la foi'}},
  {ar:{label:'دعاء الرحمة',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'رب ارحمهما كما ربياني صغيراً'},en:{label:'Dua for Parents',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'My Lord, have mercy on them as they raised me when I was small'},fr:{label:'Dua pour les Parents',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'Mon Seigneur, fais-leur misericorde comme ils m\'ont eleve quand j\'etais petit'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('iqas-lang') || 'ar';
let theme = localStorage.getItem('iqas-theme') || 'earth';
const themes = ['earth','night','garden'];
const themeIcons = ['🏛️','🌙','🌿'];
const themeNames = {earth:'ترابي',night:'ليل هادئ',garden:'حديقة'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderFamilyLaw();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('iqas-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabFamilyLaw', t.tabFamilyLaw);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('familyLawTitle', t.familyLawTitle); set('familyLawDesc', t.familyLawDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderFamilyLaw(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('iqas-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'📋',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'⚖️',tab:'familyLaw',title:t.tabFamilyLaw,desc:lang==='ar'?'قضايا معاصرة':lang==='fr'?'Questions actuelles':'Contemporary issues'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <p class="principle-desc">${d.detail}</p>
          ${d.verse ? `<div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>` : ''}
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— الإسلام وقانون الأحوال الشخصية`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: FAMILY LAW ═══════════════
function renderFamilyLaw() {
  const t = T[lang];
  document.getElementById('familyLawContainer').innerHTML = FAMILY_LAW_DATA.map(a => {
    const d = a[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${a.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${t.problem}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${t.solution}</span>
        ${d.solution}
      </div>
      ${d.verse ? `<div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>` : ''}
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('iqas-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('iqas-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('iqas-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('iqas-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('iqas-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('iqas-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('iqas-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('iqas-streak') || '{"count":0}').count; }

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#5D4037','#8D6E63','#A1887F','#D7CCC8','#4E342E','#795548','#BCAAA4'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height-canvas.height, w: Math.random()*10+5, h: Math.random()*6+3, color: colors[Math.floor(Math.random()*colors.length)], vx: (Math.random()-0.5)*4, vy: Math.random()*3+2, rot: Math.random()*360, rotSpeed: (Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [2];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'معرفتك بفقه الأسرة متقدمة. استمر في التعلم والنشر!':lang==='fr'?'Votre connaissance du droit familial est avancee. Continuez !':'Your knowledge of family law is advanced. Keep learning and sharing!';
  } else if (pct >= 50) {
    emoji = '⚖️'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'لديك أساس جيد لكن هناك مجال للتعلم. راجع البطاقات.':lang==='fr'?'Vous avez une bonne base mais il y a de la place pour apprendre.':'You have a good foundation but there\'s room to learn.';
  } else {
    emoji = '📖'; title = lang==='ar'?'ابدأ رحلة التعلم':lang==='fr'?'Commencez a apprendre':'Start Learning';
    desc = lang==='ar'?'فقه الأسرة مهم جداً. ابدأ بقراءة البطاقات وتعلّم حقوقك وواجباتك.':lang==='fr'?'Le droit familial est tres important. Commencez par lire les cartes.':'Family law is very important. Start by reading the cards.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم', disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي', authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري من أبرز رجال الدعوة في القرن العشرين. ألّف أكثر من ٩٤ كتاباً. دافع عن حقوق المرأة في الإسلام وانتقد التقاليد الجاهلية المتسترة بالدين.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"الإسلام وقانون الأحوال الشخصية" يتناول فقه الأسرة في الإسلام ويقارن بين الشريعة والقوانين الوضعية. يدافع عن حقوق المرأة ويدعو لتجديد الفقه وتحديث القوانين بما يحقق مقاصد الشريعة.',
      sourcesTitle: 'المصادر', sources: ['كتاب "الإسلام وقانون الأحوال الشخصية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice', disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, one of the most prominent preachers of the 20th century. Author of 94+ books. He defended women\'s rights in Islam and criticized pre-Islamic traditions hiding behind religion.',
      bookTitle: 'About the Book',
      bookDesc: '"Islam and Personal Status Law" examines family jurisprudence in Islam and compares Sharia with civil laws. It defends women\'s rights and calls for renewing jurisprudence and modernizing laws to achieve Sharia\'s objectives.',
      sourcesTitle: 'Sources', sources: ['"Islam and Personal Status Law" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important', disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, l\'un des predicateurs les plus eminents du XXe siecle. Auteur de plus de 94 livres. Il a defendu les droits des femmes en Islam et critique les traditions pre-islamiques se cachant derriere la religion.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« L\'Islam et le Droit du Statut Personnel » examine la jurisprudence familiale en Islam et compare la Charia avec les lois civiles. Il defend les droits des femmes et appelle au renouvellement de la jurisprudence.',
      sourcesTitle: 'Sources', sources: ['« L\'Islam et le Droit du Statut Personnel » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "الإسلام وقانون الأحوال الشخصية" للشيخ محمد الغزالي، القرآن الكريم.'},{title:'✨ المميزات',body:'٢٠ بطاقة، ٥ قضايا أسرية، عادات يومية، اختبار، أدعية.'},{title:'⌨️ اختصارات',body:'الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"Islam and Personal Status Law" by Sheikh Mohammed al-Ghazali, the Holy Quran.'},{title:'✨ Features',body:'20 cards, 5 family law issues, daily habits, quiz, duas.'},{title:'⌨️ Shortcuts',body:'Arrow keys to navigate. Escape to close panels.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'« L\'Islam et le Droit du Statut Personnel » par Sheikh Mohammed al-Ghazali, le Saint Coran.'},{title:'✨ Fonctionnalites',body:'20 cartes, 5 questions familiales, habitudes, quiz, duas.'},{title:'⌨️ Raccourcis',body:'Fleches pour naviguer. Echap pour fermer.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }, 100));
  });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cp = document.getElementById('panel-cards');
      if (!cp || !cp.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ GENIUS FEATURES ═══════════════
function initTypewriter() {
  const dt = document.querySelector('.daily-card .daily-title');
  if (!dt || dt.dataset.twDone) return;
  const full = dt.textContent; dt.textContent = ''; dt.classList.add('typewriter-text'); dt.dataset.twDone = '1';
  let i = 0; const speed = Math.max(30, 2000 / full.length);
  function tc() { if (i < full.length) { dt.textContent += full.charAt(i); i++; setTimeout(tc, speed); } else { setTimeout(() => dt.classList.add('tw-done'), 1500); } }
  setTimeout(tc, 500);
}

function initParticles() {
  const canvas = document.createElement('canvas'); canvas.className = 'particles-canvas'; document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d'); let particles = [];
  const colors = ['rgba(93,64,55,0.15)', 'rgba(141,110,99,0.12)', 'rgba(161,136,127,0.1)'];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 20; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*4+2, vy:-(Math.random()*0.3+0.1), vx:(Math.random()-0.5)*0.2, color:colors[Math.floor(Math.random()*colors.length)] }); }
  function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=p.color; ctx.fill(); p.y+=p.vy; p.x+=p.vx; if(p.y<-10){p.y=canvas.height+10;p.x=Math.random()*canvas.width;} if(p.x<-10)p.x=canvas.width+10; if(p.x>canvas.width+10)p.x=-10; }); requestAnimationFrame(draw); } draw();
}

function initSwipeGestures() {
  let sx=0, sy=0;
  const tabs = ['home','cards','familyLaw','habits','quiz','about'];
  document.addEventListener('touchstart', e => { sx=e.changedTouches[0].screenX; sy=e.changedTouches[0].screenY; }, {passive:true});
  document.addEventListener('touchend', e => {
    const dx=e.changedTouches[0].screenX-sx, dy=e.changedTouches[0].screenY-sy;
    if (Math.abs(dx)<80||Math.abs(dy)>Math.abs(dx)*0.6) return;
    const cur=tabs.indexOf(document.querySelector('.tab.active')?.dataset.tab);
    if(cur<0)return;
    const isRTL=document.documentElement.dir==='rtl';
    const next=dx>0?(isRTL?Math.min(cur+1,tabs.length-1):Math.max(cur-1,0)):(isRTL?Math.max(cur-1,0):Math.min(cur+1,tabs.length-1));
    if(next!==cur){const tb=document.querySelector(`.tab[data-tab="${tabs[next]}"]`);if(tb)tb.click();}
  }, {passive:true});
}

(function upgradeTabTransitions() {
  const orig = initTabs;
  initTabs = function() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const isRTL = document.documentElement.dir === 'rtl';
        const exitCls = isRTL ? 'panel-exit-rtl' : 'panel-exit-ltr';
        const enterCls = isRTL ? 'panel-enter-rtl' : 'panel-enter-ltr';
        const cur = document.querySelector('.panel.active');
        if (cur) { cur.classList.add(exitCls); setTimeout(() => cur.classList.remove('active', exitCls), 280); }
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const np = document.getElementById('panel-' + tab.dataset.tab);
        if (np) { setTimeout(() => { np.classList.add('active', enterCls); setTimeout(() => np.classList.remove(enterCls), 300); }, cur ? 280 : 0); }
        window.scrollTo({top:0,behavior:'smooth'}); playSound('click');
        try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
      });
    });
  };
})();

const _origRenderHome = renderHome;
renderHome = function() { _origRenderHome(); setTimeout(initTypewriter, 600); };

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSwipeGestures();
});

/* TICKER */
function startTicker(){
  var el=document.getElementById('tickerText'); if(!el)return;
  var tips={
    ar:['⚖️ ٢٠ بطاقة عن فقه الأسرة','👩 حقوق المرأة في الإسلام','💍 الزواج ميثاق غليظ','📖 الغزالي يدافع عن حقوق الأسرة','🤲 اللّهُمّ أصلح ذات بيننا','💡 Powered by workshop-diy.org'],
    en:['⚖️ 20 cards on family law','👩 Women\'s rights in Islam','💍 Marriage is a solemn covenant','📖 Al-Ghazali defends family rights','🤲 O God, rectify our affairs','💡 Powered by workshop-diy.org'],
    fr:['⚖️ 20 cartes sur le droit familial','👩 Droits des femmes en Islam','💍 Le mariage est un pacte solennel','📖 Al-Ghazali defend les droits familiaux','🤲 O Dieu, rectifie nos affaires','💡 Powered by workshop-diy.org']
  };
  var l=document.documentElement.lang||'ar'; var msgs=tips[l]||tips.ar; var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
