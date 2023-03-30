type kana = {
  id: string;
  pronunciation: string;
  kana: string;
  type: 'basic' | 'tenten' | 'yoon';
};

const katakana: kana[] = [
  {
    id: 'k_a',
    pronunciation: 'A',
    kana: 'ア',
    type: 'basic',
  },
  {
    id: 'k_i',
    pronunciation: 'I',
    kana: 'イ',
    type: 'basic',
  },
  {
    id: 'k_u',
    pronunciation: 'U',
    kana: 'ウ',
    type: 'basic',
  },
  {
    id: 'k_e',
    pronunciation: 'E',
    kana: 'エ',
    type: 'basic',
  },
  {
    id: 'k_o',
    pronunciation: 'O',
    kana: 'オ',
    type: 'basic',
  },
  {
    id: 'k_ka',
    pronunciation: 'KA',
    kana: 'カ',
    type: 'basic',
  },
  {
    id: 'k_ki',
    pronunciation: 'KI',
    kana: 'キ',
    type: 'basic',
  },
  {
    id: 'k_ku',
    pronunciation: 'KU',
    kana: 'ク',
    type: 'basic',
  },
  {
    id: 'k_ke',
    pronunciation: 'KE',
    kana: 'ケ',
    type: 'basic',
  },
  {
    id: 'k_ko',
    pronunciation: 'KO',
    kana: 'コ',
    type: 'basic',
  },
  {
    id: 'k_sa',
    pronunciation: 'SA',
    kana: 'サ',
    type: 'basic',
  },
  {
    id: 'k_shi',
    pronunciation: 'SHI',
    kana: 'シ',
    type: 'basic',
  },
  {
    id: 'k_su',
    pronunciation: 'SU',
    kana: 'ス',
    type: 'basic',
  },
  {
    id: 'k_se',
    pronunciation: 'SE',
    kana: 'セ',
    type: 'basic',
  },
  {
    id: 'k_so',
    pronunciation: 'SO',
    kana: 'ソ',
    type: 'basic',
  },
  {
    id: 'k_ta',
    pronunciation: 'TA',
    kana: 'タ',
    type: 'basic',
  },
  {
    id: 'k_chi',
    pronunciation: 'CHI',
    kana: 'チ',
    type: 'basic',
  },
  {
    id: 'k_tsu',
    pronunciation: 'TSU',
    kana: 'ツ',
    type: 'basic',
  },
  {
    id: 'k_te',
    pronunciation: 'TE',
    kana: 'テ',
    type: 'basic',
  },
  {
    id: 'k_to',
    pronunciation: 'TO',
    kana: 'ト',
    type: 'basic',
  },
  {
    id: 'k_na',
    pronunciation: 'NA',
    kana: 'ナ',
    type: 'basic',
  },
  {
    id: 'k_ni',
    pronunciation: 'NI',
    kana: 'ニ',
    type: 'basic',
  },
  {
    id: 'k_nu',
    pronunciation: 'NU',
    kana: 'ヌ',
    type: 'basic',
  },
  {
    id: 'k_ne',
    pronunciation: 'NE',
    kana: 'ネ',
    type: 'basic',
  },
  {
    id: 'k_no',
    pronunciation: 'NO',
    kana: 'ノ',
    type: 'basic',
  },
  {
    id: 'k_ha',
    pronunciation: 'HA',
    kana: 'ハ',
    type: 'basic',
  },
  {
    id: 'k_hi',
    pronunciation: 'HI',
    kana: 'ヒ',
    type: 'basic',
  },
  {
    id: 'k_fu',
    pronunciation: 'FU',
    kana: 'フ',
    type: 'basic',
  },
  {
    id: 'k_he',
    pronunciation: 'HE',
    kana: 'ヘ',
    type: 'basic',
  },
  {
    id: 'k_ho',
    pronunciation: 'HO',
    kana: 'ホ',
    type: 'basic',
  },
  {
    id: 'k_ma',
    pronunciation: 'MA',
    kana: 'マ',
    type: 'basic',
  },
  {
    id: 'k_mi',
    pronunciation: 'MI',
    kana: 'ミ',
    type: 'basic',
  },
  {
    id: 'k_mu',
    pronunciation: 'MU',
    kana: 'ム',
    type: 'basic',
  },
  {
    id: 'k_me',
    pronunciation: 'ME',
    kana: 'メ',
    type: 'basic',
  },
  {
    id: 'k_mo',
    pronunciation: 'MO',
    kana: 'モ',
    type: 'basic',
  },
  {
    id: 'k_ya',
    pronunciation: 'YA',
    kana: 'ヤ',
    type: 'basic',
  },
  {
    id: 'k_yu',
    pronunciation: 'YU',
    kana: 'ユ',
    type: 'basic',
  },
  {
    id: 'k_yo',
    pronunciation: 'YO',
    kana: 'ヨ',
    type: 'basic',
  },
  {
    id: 'k_ra',
    pronunciation: 'RA',
    kana: 'ラ',
    type: 'basic',
  },
  {
    id: 'k_ri',
    pronunciation: 'RI',
    kana: 'リ',
    type: 'basic',
  },
  {
    id: 'k_ru',
    pronunciation: 'RU',
    kana: 'ル',
    type: 'basic',
  },
  {
    id: 'k_re',
    pronunciation: 'RE',
    kana: 'レ',
    type: 'basic',
  },
  {
    id: 'k_ro',
    pronunciation: 'RO',
    kana: 'ロ',
    type: 'basic',
  },
  {
    id: 'k_wa',
    pronunciation: 'WA',
    kana: 'ワ',
    type: 'basic',
  },
  {
    id: 'k_wo',
    pronunciation: '(W)O',
    kana: 'ヲ',
    type: 'basic',
  },
  {
    id: 'k_n',
    pronunciation: 'N',
    kana: 'ン',
    type: 'basic',
  },
  {
    id: 'k_ga',
    pronunciation: 'GA',
    kana: 'ガ',
    type: 'tenten',
  },
  {
    id: 'k_gi',
    pronunciation: 'GI',
    kana: 'ギ',
    type: 'tenten',
  },
  {
    id: 'k_gu',
    pronunciation: 'GU',
    kana: 'グ',
    type: 'tenten',
  },
  {
    id: 'k_ge',
    pronunciation: 'GE',
    kana: 'ゲ',
    type: 'tenten',
  },
  {
    id: 'k_go',
    pronunciation: 'GO',
    kana: 'ゴ',
    type: 'tenten',
  },
  {
    id: 'k_za',
    pronunciation: 'ZA',
    kana: 'ザ',
    type: 'tenten',
  },
  {
    id: 'k_zi',
    pronunciation: 'JI',
    kana: 'ジ',
    type: 'tenten',
  },
  {
    id: 'k_zu',
    pronunciation: 'ZU',
    kana: 'ズ',
    type: 'tenten',
  },
  {
    id: 'k_ze',
    pronunciation: 'ZE',
    kana: 'ゼ',
    type: 'tenten',
  },
  {
    id: 'k_zo',
    pronunciation: 'ZO',
    kana: 'ゾ',
    type: 'tenten',
  },
  {
    id: 'k_da',
    pronunciation: 'DA',
    kana: 'ダ',
    type: 'tenten',
  },
  {
    id: 'k_di',
    pronunciation: 'DI',
    kana: 'ヂ',
    type: 'tenten',
  },
  {
    id: 'k_du',
    pronunciation: 'DU',
    kana: 'ヅ',
    type: 'tenten',
  },
  {
    id: 'k_de',
    pronunciation: 'DE',
    kana: 'デ',
    type: 'tenten',
  },
  {
    id: 'k_do',
    pronunciation: 'DO',
    kana: 'ド',
    type: 'tenten',
  },
  {
    id: 'k_ba',
    pronunciation: 'BA',
    kana: 'バ',
    type: 'tenten',
  },
  {
    id: 'k_bi',
    pronunciation: 'BI',
    kana: 'ビ',
    type: 'tenten',
  },
  {
    id: 'k_bu',
    pronunciation: 'BU',
    kana: 'ブ',
    type: 'tenten',
  },
  {
    id: 'k_be',
    pronunciation: 'BE',
    kana: 'ベ',
    type: 'tenten',
  },
  {
    id: 'k_bo',
    pronunciation: 'BO',
    kana: 'ボ',
    type: 'tenten',
  },
  {
    id: 'k_pa',
    pronunciation: 'PA',
    kana: 'パ',
    type: 'tenten',
  },
  {
    id: 'k_pi',
    pronunciation: 'PI',
    kana: 'ピ',
    type: 'tenten',
  },
  {
    id: 'k_pu',
    pronunciation: 'PU',
    kana: 'プ',
    type: 'tenten',
  },
  {
    id: 'k_pe',
    pronunciation: 'PE',
    kana: 'ペ',
    type: 'tenten',
  },
  {
    id: 'k_po',
    pronunciation: 'PO',
    kana: 'ポ',
    type: 'tenten',
  },
  {
    id: 'k_kya',
    pronunciation: 'KYA',
    kana: 'キャ',
    type: 'yoon',
  },
  {
    id: 'k_kyu',
    pronunciation: 'KYU',
    kana: 'キュ',
    type: 'yoon',
  },
  {
    id: 'k_kyo',
    pronunciation: 'KYO',
    kana: 'キョ',
    type: 'yoon',
  },
  {
    id: 'k_sha',
    pronunciation: 'SHA',
    kana: 'シャ',
    type: 'yoon',
  },
  {
    id: 'k_shu',
    pronunciation: 'SHU',
    kana: 'シュ',
    type: 'yoon',
  },
  {
    id: 'k_sho',
    pronunciation: 'SHO',
    kana: 'ショ',
    type: 'yoon',
  },
  {
    id: 'k_cha',
    pronunciation: 'CHA',
    kana: 'チャ',
    type: 'yoon',
  },
  {
    id: 'k_chu',
    pronunciation: 'CHU',
    kana: 'チュ',
    type: 'yoon',
  },
  {
    id: 'k_cho',
    pronunciation: 'CHO',
    kana: 'チョ',
    type: 'yoon',
  },
  {
    id: 'k_nya',
    pronunciation: 'NYA',
    kana: 'ニャ',
    type: 'yoon',
  },
  {
    id: 'k_nyu',
    pronunciation: 'NYU',
    kana: 'ニュ',
    type: 'yoon',
  },
  {
    id: 'k_nyo',
    pronunciation: 'NYO',
    kana: 'ニョ',
    type: 'yoon',
  },
  {
    id: 'k_hya',
    pronunciation: 'HYA',
    kana: 'ヒャ',
    type: 'yoon',
  },
  {
    id: 'k_hyu',
    pronunciation: 'HYU',
    kana: 'ヒュ',
    type: 'yoon',
  },
  {
    id: 'k_hyo',
    pronunciation: 'HYO',
    kana: 'ヒョ',
    type: 'yoon',
  },
  {
    id: 'k_mya',
    pronunciation: 'MYA',
    kana: 'ミャ',
    type: 'yoon',
  },
  {
    id: 'k_myu',
    pronunciation: 'MYU',
    kana: 'ミュ',
    type: 'yoon',
  },
  {
    id: 'k_myo',
    pronunciation: 'MYO',
    kana: 'ミョ',
    type: 'yoon',
  },
  {
    id: 'k_rya',
    pronunciation: 'RYA',
    kana: 'リャ',
    type: 'yoon',
  },
  {
    id: 'k_ryu',
    pronunciation: 'RYU',
    kana: 'リュ',
    type: 'yoon',
  },
  {
    id: 'k_ryo',
    pronunciation: 'RYO',
    kana: 'リョ',
    type: 'yoon',
  },
  {
    id: 'k_gya',
    pronunciation: 'GYA',
    kana: 'ガャ',
    type: 'yoon',
  },
  {
    id: 'k_gyu',
    pronunciation: 'GYU',
    kana: 'ガュ',
    type: 'yoon',
  },
  {
    id: 'k_gyo',
    pronunciation: 'GYO',
    kana: 'ガョ',
    type: 'yoon',
  },
  {
    id: 'k_ja',
    pronunciation: 'JA',
    kana: 'ジャ',
    type: 'yoon',
  },
  {
    id: 'k_ju',
    pronunciation: 'JU',
    kana: 'ジュ',
    type: 'yoon',
  },
  {
    id: 'k_jo',
    pronunciation: 'JO',
    kana: 'ジョ',
    type: 'yoon',
  },
  {
    id: 'k_bya',
    pronunciation: 'BYA',
    kana: 'ビャ',
    type: 'yoon',
  },
  {
    id: 'k_byu',
    pronunciation: 'BYU',
    kana: 'ビュ',
    type: 'yoon',
  },
  {
    id: 'k_byo',
    pronunciation: 'BYO',
    kana: 'ビョ',
    type: 'yoon',
  },
  {
    id: 'k_pya',
    pronunciation: 'PYA',
    kana: 'ポャ',
    type: 'yoon',
  },
  {
    id: 'k_pyu',
    pronunciation: 'PYU',
    kana: 'ポュ',
    type: 'yoon',
  },
  {
    id: 'k_pyo',
    pronunciation: 'PYO',
    kana: 'ポョ',
    type: 'yoon',
  },
];

export default katakana;
