var sortSummaryData = [
  {
    "Countries": "USA",
    "Breast": 546260,
    "Face & Head": 413140,
    "Others": 454935
  },
  {
    "Countries": "Brazil",
    "Breast": 358655,
    "Face & Head": 430375,
    "Others": 435270
  },
  {
    "Countries": "Mexico",
    "Breast": 110624,
    "Face & Head": 185411,
    "Others": 165509
  },
  {
    "Countries": "South Korea",
    "Breast": 74876,
    "Face & Head": 311571,
    "Others": 58697
  },
  {
    "Countries": "India",
    "Breast": 81980,
    "Face & Head": 185158,
    "Others": 153317
  },
  {
    "Countries": "Colombia",
    "Breast": 84636,
    "Face & Head": 107949,
    "Others": 122199
  },
  {
    "Countries": "Germany",
    "Breast": 101611,
    "Face & Head": 126824,
    "Others": 79823
  },
  {
    "Countries": "France",
    "Breast": 85652,
    "Face & Head": 101365,
    "Others": 72191
  },
  {
    "Countries": "Italy",
    "Breast": 41192,
    "Face & Head": 60000,
    "Others": 37672
  }
];

var sortPCData = [
  {
    "Countries": "South Korea",
    "Breast": 0.001479265,
    "Face & Head": 0.006155456,
    "Others": 0.001159629
  },
  {
    "Countries": "Colombia",
    "Breast": 0.001754889,
    "Face & Head": 0.002238273,
    "Others": 0.00253374
  },
  {
    "Countries": "Brazil",
    "Breast": 0.001725568,
    "Face & Head": 0.002070628,
    "Others": 0.002094179
  },
  {
    "Countries": "USA",
    "Breast": 0.001699527,
    "Face & Head": 0.001285363,
    "Others": 0.001415396
  },
  {
    "Countries": "France",
    "Breast": 0.001282055,
    "Face & Head": 0.00151725,
    "Others": 0.001080568
  },
  {
    "Countries": "Germany",
    "Breast": 0.001248091,
    "Face & Head": 0.001557783,
    "Others": 0.000980468
  },
  {
    "Countries": "Mexico",
    "Breast": 0.000870937,
    "Face & Head": 0.001459731,
    "Others": 0.001303044
  },
  {
    "Countries": "Italy",
    "Breast": 0.000677477,
    "Face & Head": 0.000986808,
    "Others": 0.000619584
  },
  {
    "Countries": "India",
    "Breast": 0.0000625,
    "Face & Head": 0.000141229,
    "Others": 0.000116942
  }
];

var procedureData = [
  {
    "Countries": "USA",
    "Breast Augmentation": 309985,
    "Liposuction": 240565,
    "Eyelid Surgery": 141505,
    "Abdominoplasty": 137605,
    "Breast Lift": 106535,
    "Facelift": 75920,
    "Breast Reduction": 67080,
    "Rhinoplasty": 49855,
    "Fat Grafting-face": 49660,
    "Breast Implant Removal": 37115,
    "Neck Lift": 32695,
    "Brow Lift": 28535,
    "Gynecomastia": 25545,
    "Buttock Augmentation": 22815,
    "Upper Arm Lift": 17810,
    "Ear Surgery": 16250,
    "Facial Bone Contouring": 11115,
    "Labiaplasty": 10855,
    "Thigh Lift": 8775,
    "Hair Transplantation": 7605,
    "Lower Body Lift": 6955,
    "Buttock Lift": 4095,
    "Upper Body Lift": 2600,
    "Vaginal Rejuvenation": 2535,
    "Penile Enlargement": 325
  },
  {
    "Countries": "Brazil",
    "Breast Augmentation": 166430,
    "Liposuction": 182765,
    "Eyelid Surgery": 143165,
    "Abdominoplasty": 131120,
    "Breast Lift": 80520,
    "Facelift": 48840,
    "Breast Reduction": 72600,
    "Rhinoplasty": 65120,
    "Fat Grafting-face": 51645,
    "Breast Implant Removal": 12705,
    "Neck Lift": 31405,
    "Brow Lift": 31405,
    "Gynecomastia": 26400,
    "Buttock Augmentation": 63745,
    "Upper Arm Lift": 12595,
    "Ear Surgery": 42240,
    "Facial Bone Contouring": 7480,
    "Labiaplasty": 12870,
    "Thigh Lift": 10505,
    "Hair Transplantation": 9075,
    "Lower Body Lift": 7700,
    "Buttock Lift": 4125,
    "Upper Body Lift": 2805,
    "Vaginal Rejuvenation": 6600,
    "Penile Enlargement": 440
  },
  {
    "Countries": "South Korea",
    "Breast Augmentation": 50554,
    "Liposuction": 39753,
    "Eyelid Surgery": 101985,
    "Abdominoplasty": 7993,
    "Breast Lift": 8101,
    "Facelift": 28116,
    "Breast Reduction": 5165,
    "Rhinoplasty": 72562,
    "Fat Grafting-face": 63326,
    "Breast Implant Removal": 6300,
    "Neck Lift": 7093,
    "Brow Lift": 16437,
    "Gynecomastia": 4757,
    "Buttock Augmentation": 3086,
    "Upper Arm Lift": 707,
    "Ear Surgery": 6472,
    "Facial Bone Contouring": 8143,
    "Labiaplasty": 2186,
    "Thigh Lift": 86,
    "Hair Transplantation": 7436,
    "Lower Body Lift": 429,
    "Buttock Lift": 471,
    "Upper Body Lift": 0,
    "Vaginal Rejuvenation": 2764,
    "Penile Enlargement": 1222
  },
  {
    "Countries": "India",
    "Breast Augmentation": 29606,
    "Liposuction": 88193,
    "Eyelid Surgery": 29434,
    "Abdominoplasty": 32401,
    "Breast Lift": 9052,
    "Facelift": 7783,
    "Breast Reduction": 16491,
    "Rhinoplasty": 44290,
    "Fat Grafting-face": 27649,
    "Breast Implant Removal": 1742,
    "Neck Lift": 7826,
    "Brow Lift": 5827,
    "Gynecomastia": 25091,
    "Buttock Augmentation": 5462,
    "Upper Arm Lift": 5074,
    "Ear Surgery": 18060,
    "Facial Bone Contouring": 4666,
    "Labiaplasty": 3935,
    "Thigh Lift": 2967,
    "Hair Transplantation": 39625,
    "Lower Body Lift": 3677,
    "Buttock Lift": 1935,
    "Upper Body Lift": 1333,
    "Vaginal Rejuvenation": 6859,
    "Penile Enlargement": 1484
  },
  {
    "Countries": "Mexico",
    "Breast Augmentation": 61613,
    "Liposuction": 70773,
    "Eyelid Surgery": 48329,
    "Abdominoplasty": 39634,
    "Breast Lift": 21902,
    "Facelift": 16585,
    "Breast Reduction": 14198,
    "Rhinoplasty": 39897,
    "Fat Grafting-face": 27652,
    "Breast Implant Removal": 5952,
    "Neck Lift": 16151,
    "Brow Lift": 14214,
    "Gynecomastia": 6960,
    "Buttock Augmentation": 32473,
    "Upper Arm Lift": 5069,
    "Ear Surgery": 10323,
    "Facial Bone Contouring": 11269,
    "Labiaplasty": 3441,
    "Thigh Lift": 3317,
    "Hair Transplantation": 992,
    "Lower Body Lift": 3286,
    "Buttock Lift": 2945,
    "Upper Body Lift": 1674,
    "Vaginal Rejuvenation": 2821,
    "Penile Enlargement": 78
  },
  {
    "Countries": "Germany",
    "Breast Augmentation": 53376,
    "Liposuction": 40065,
    "Eyelid Surgery": 54907,
    "Abdominoplasty": 17682,
    "Breast Lift": 15271,
    "Facelift": 10801,
    "Breast Reduction": 17121,
    "Rhinoplasty": 12717,
    "Fat Grafting-face": 21877,
    "Breast Implant Removal": 5967,
    "Neck Lift": 7498,
    "Brow Lift": 5714,
    "Gynecomastia": 9876,
    "Buttock Augmentation": 3721,
    "Upper Arm Lift": 4437,
    "Ear Surgery": 10052,
    "Facial Bone Contouring": 2092,
    "Labiaplasty": 5296,
    "Thigh Lift": 3160,
    "Hair Transplantation": 1167,
    "Lower Body Lift": 2092,
    "Buttock Lift": 848,
    "Upper Body Lift": 1563,
    "Vaginal Rejuvenation": 639,
    "Penile Enlargement": 319
  },
  {
    "Countries": "Colombia",
    "Breast Augmentation": 46703,
    "Liposuction": 51623,
    "Eyelid Surgery": 27959,
    "Abdominoplasty": 29317,
    "Breast Lift": 16321,
    "Facelift": 8503,
    "Breast Reduction": 11381,
    "Rhinoplasty": 24852,
    "Fat Grafting-face": 15827,
    "Breast Implant Removal": 6090,
    "Neck Lift": 8294,
    "Brow Lift": 7315,
    "Gynecomastia": 4142,
    "Buttock Augmentation": 25461,
    "Upper Arm Lift": 2546,
    "Ear Surgery": 7192,
    "Facial Bone Contouring": 4921,
    "Labiaplasty": 3259,
    "Thigh Lift": 2613,
    "Hair Transplantation": 3088,
    "Lower Body Lift": 2632,
    "Buttock Lift": 561,
    "Upper Body Lift": 1017,
    "Vaginal Rejuvenation": 2508,
    "Penile Enlargement": 665
  },
  {
    "Countries": "France",
    "Breast Augmentation": 41924,
    "Liposuction": 29450,
    "Eyelid Surgery": 35473,
    "Abdominoplasty": 22924,
    "Breast Lift": 14421,
    "Facelift": 12474,
    "Breast Reduction": 18953,
    "Rhinoplasty": 20055,
    "Fat Grafting-face": 11847,
    "Breast Implant Removal": 6004,
    "Neck Lift": 7724,
    "Brow Lift": 4446,
    "Gynecomastia": 4351,
    "Buttock Augmentation": 3145,
    "Upper Arm Lift": 5330,
    "Ear Surgery": 6375,
    "Facial Bone Contouring": 323,
    "Labiaplasty": 3097,
    "Thigh Lift": 3876,
    "Hair Transplantation": 2651,
    "Lower Body Lift": 2850,
    "Buttock Lift": 646,
    "Upper Body Lift": 124,
    "Vaginal Rejuvenation": 523,
    "Penile Enlargement": 228
  },
  {
    "Countries": "Italy",
    "Breast Augmentation": 23400,
    "Liposuction": 20784,
    "Eyelid Surgery": 19960,
    "Abdominoplasty": 5384,
    "Breast Lift": 7160,
    "Facelift": 4544,
    "Breast Reduction": 3672,
    "Rhinoplasty": 9984,
    "Fat Grafting-face": 11216,
    "Breast Implant Removal": 2744,
    "Neck Lift": 2984,
    "Brow Lift": 3584,
    "Gynecomastia": 4216,
    "Buttock Augmentation": 2688,
    "Upper Arm Lift": 2160,
    "Ear Surgery": 4544,
    "Facial Bone Contouring": 2200,
    "Labiaplasty": 1872,
    "Thigh Lift": 1328,
    "Hair Transplantation": 984,
    "Lower Body Lift": 728,
    "Buttock Lift": 360,
    "Upper Body Lift": 616,
    "Vaginal Rejuvenation": 1312,
    "Penile Enlargement": 440
  }
];

var countryData = [
  {
    "Procedure": "Breast Augmentation",
    "USA": 309985,
    "Brazil": 166430,
    "South Korea": 50554,
    "India": 29606,
    "Mexico": 61613,
    "Germany": 53376,
    "Colombia": 46703,
    "France": 41924,
    "Italy": 23400
  },
  {
    "Procedure": "Liposuction",
    "USA": 240565,
    "Brazil": 182765,
    "South Korea": 39753,
    "India": 88193,
    "Mexico": 70773,
    "Germany": 40065,
    "Colombia": 51623,
    "France": 29450,
    "Italy": 20784
  },
  {
    "Procedure": "Eyelid Surgery",
    "USA": 141505,
    "Brazil": 143165,
    "South Korea": 101985,
    "India": 29434,
    "Mexico": 48329,
    "Germany": 54907,
    "Colombia": 27959,
    "France": 35473,
    "Italy": 19960
  },
  {
    "Procedure": "Abdominoplasty",
    "USA": 137605,
    "Brazil": 131120,
    "South Korea": 7993,
    "India": 32401,
    "Mexico": 39634,
    "Germany": 17682,
    "Colombia": 29317,
    "France": 22924,
    "Italy": 5384
  },
  {
    "Procedure": "Breast Lift",
    "USA": 106535,
    "Brazil": 80520,
    "South Korea": 8101,
    "India": 9052,
    "Mexico": 21902,
    "Germany": 15271,
    "Colombia": 16321,
    "France": 14421,
    "Italy": 7160
  },
  {
    "Procedure": "Facelift",
    "USA": 75920,
    "Brazil": 48840,
    "South Korea": 28116,
    "India": 7783,
    "Mexico": 16585,
    "Germany": 10801,
    "Colombia": 8503,
    "France": 12474,
    "Italy": 4544
  },
  {
    "Procedure": "Breast Reduction",
    "USA": 67080,
    "Brazil": 72600,
    "South Korea": 5165,
    "India": 16491,
    "Mexico": 14198,
    "Germany": 17121,
    "Colombia": 11381,
    "France": 18953,
    "Italy": 3672
  },
  {
    "Procedure": "Rhinoplasty",
    "USA": 49855,
    "Brazil": 65120,
    "South Korea": 72562,
    "India": 44290,
    "Mexico": 39897,
    "Germany": 12717,
    "Colombia": 24852,
    "France": 20055,
    "Italy": 9984
  },
  {
    "Procedure": "Fat Grafting-face",
    "USA": 49660,
    "Brazil": 51645,
    "South Korea": 63326,
    "India": 27649,
    "Mexico": 27652,
    "Germany": 21877,
    "Colombia": 15827,
    "France": 11847,
    "Italy": 11216
  },
  {
    "Procedure": "Breast Implant Removal",
    "USA": 37115,
    "Brazil": 12705,
    "South Korea": 6300,
    "India": 1742,
    "Mexico": 5952,
    "Germany": 5967,
    "Colombia": 6090,
    "France": 6004,
    "Italy": 2744
  },
  {
    "Procedure": "Neck Lift",
    "USA": 32695,
    "Brazil": 31405,
    "South Korea": 7093,
    "India": 7826,
    "Mexico": 16151,
    "Germany": 7498,
    "Colombia": 8294,
    "France": 7724,
    "Italy": 2984
  },
  {
    "Procedure": "Brow Lift",
    "USA": 28535,
    "Brazil": 31405,
    "South Korea": 16437,
    "India": 5827,
    "Mexico": 14214,
    "Germany": 5714,
    "Colombia": 7315,
    "France": 4446,
    "Italy": 3584
  },
  {
    "Procedure": "Gynecomastia",
    "USA": 25545,
    "Brazil": 26400,
    "South Korea": 4757,
    "India": 25091,
    "Mexico": 6960,
    "Germany": 9876,
    "Colombia": 4142,
    "France": 4351,
    "Italy": 4216
  },
  {
    "Procedure": "Buttock Augmentation",
    "USA": 22815,
    "Brazil": 63745,
    "South Korea": 3086,
    "India": 5462,
    "Mexico": 32473,
    "Germany": 3721,
    "Colombia": 25461,
    "France": 3145,
    "Italy": 2688
  },
  {
    "Procedure": "Upper Arm Lift",
    "USA": 17810,
    "Brazil": 12595,
    "South Korea": 707,
    "India": 5074,
    "Mexico": 5069,
    "Germany": 4437,
    "Colombia": 2546,
    "France": 5330,
    "Italy": 2160
  },
  {
    "Procedure": "Ear Surgery",
    "USA": 16250,
    "Brazil": 42240,
    "South Korea": 6472,
    "India": 18060,
    "Mexico": 10323,
    "Germany": 10052,
    "Colombia": 7192,
    "France": 6375,
    "Italy": 4544
  },
  {
    "Procedure": "Facial Bone Contouring",
    "USA": 11115,
    "Brazil": 7480,
    "South Korea": 8143,
    "India": 4666,
    "Mexico": 11269,
    "Germany": 2092,
    "Colombia": 4921,
    "France": 323,
    "Italy": 2200
  },
  {
    "Procedure": "Labiaplasty",
    "USA": 10855,
    "Brazil": 12870,
    "South Korea": 2186,
    "India": 3935,
    "Mexico": 3441,
    "Germany": 5296,
    "Colombia": 3259,
    "France": 3097,
    "Italy": 1872
  },
  {
    "Procedure": "Thigh Lift",
    "USA": 8775,
    "Brazil": 10505,
    "South Korea": 86,
    "India": 2967,
    "Mexico": 3317,
    "Germany": 3160,
    "Colombia": 2613,
    "France": 3876,
    "Italy": 1328
  },
  {
    "Procedure": "Hair Transplantation",
    "USA": 7605,
    "Brazil": 9075,
    "South Korea": 7436,
    "India": 39625,
    "Mexico": 992,
    "Germany": 1167,
    "Colombia": 3088,
    "France": 2651,
    "Italy": 984
  },
  {
    "Procedure": "Lower Body Lift",
    "USA": 6955,
    "Brazil": 7700,
    "South Korea": 429,
    "India": 3677,
    "Mexico": 3286,
    "Germany": 2092,
    "Colombia": 2632,
    "France": 2850,
    "Italy": 728
  },
  {
    "Procedure": "Buttock Lift",
    "USA": 4095,
    "Brazil": 4125,
    "South Korea": 471,
    "India": 1935,
    "Mexico": 2945,
    "Germany": 848,
    "Colombia": 561,
    "France": 646,
    "Italy": 360
  },
  {
    "Procedure": "Upper Body Lift",
    "USA": 2600,
    "Brazil": 2805,
    "South Korea": 0,
    "India": 1333,
    "Mexico": 1674,
    "Germany": 1563,
    "Colombia": 1017,
    "France": 124,
    "Italy": 616
  },
  {
    "Procedure": "Vaginal Rejuvenation",
    "USA": 2535,
    "Brazil": 6600,
    "South Korea": 2764,
    "India": 6859,
    "Mexico": 2821,
    "Germany": 639,
    "Colombia": 2508,
    "France": 523,
    "Italy": 1312
  },
  {
    "Procedure": "Penile Enlargement",
    "USA": 325,
    "Brazil": 440,
    "South Korea": 1222,
    "India": 1484,
    "Mexico": 78,
    "Germany": 319,
    "Colombia": 665,
    "France": 228,
    "Italy": 440
  }
];

var costData = [
  {
    "Procedures": "Lower body lift",
    "Part": "Other",
    "Cost": 7903,
    "Total Expenditure": 66630193
  },
  {
    "Procedures": "Full Facelift",
    "Part": "Face and Head",
    "Cost": 6759,
    "Total Expenditure": 653777793
  },
  {
    "Procedures": "Facelift",
    "Part": "Face and Head",
    "Cost": 6652,
    "Total Expenditure": 836229572
  },
  {
    "Procedures": "Abdominoplasty",
    "Part": "Other",
    "Cost": 5502,
    "Total Expenditure": 704074434
  },
  {
    "Procedures": "Breast Reduction",
    "Part": "Breast",
    "Cost": 5425,
    "Total Expenditure": 220526250
  },
  {
    "Procedures": "Mini Facelift",
    "Part": "Face and Head",
    "Cost": 4805,
    "Total Expenditure": 139268120
  },
  {
    "Procedures": "Rhinoplasty",
    "Part": "Face and Head",
    "Cost": 4771,
    "Total Expenditure": 1039977809
  },
  {
    "Procedures": "Buttock implants",
    "Part": "Other",
    "Cost": 4580,
    "Total Expenditure": 11633200
  },
  {
    "Procedures": "Thigh Lift",
    "Part": "Other",
    "Cost": 4575,
    "Total Expenditure": 42053400
  },
  {
    "Procedures": "Neck lift",
    "Part": "Face and Head",
    "Cost": 4497,
    "Total Expenditure": 244114528
  },
  {
    "Procedures": "Breast Lift",
    "Part": "Breast",
    "Cost": 4419,
    "Total Expenditure": 440194266
  },
  {
    "Procedures": "Pectoral implants",
    "Part": "Other",
    "Cost": 4353,
    "Total Expenditure": 4030878
  },
  {
    "Procedures": "Buttock lift",
    "Part": "Other",
    "Cost": 4296,
    "Total Expenditure": 20479032
  },
  {
    "Procedures": "Buttock augmentation with fat grafting",
    "Part": "Other",
    "Cost": 4103,
    "Total Expenditure": 60334615
  },
  {
    "Procedures": "Upper arm lift (Brachioplasty)",
    "Part": "Other",
    "Cost": 3999,
    "Total Expenditure": 68378901
  },
  {
    "Procedures": "Breast Augmentation",
    "Part": "Breast",
    "Cost": 3822,
    "Total Expenditure": 1066828717
  },
  {
    "Procedures": "Calf augmentation",
    "Part": "Other",
    "Cost": 3479,
    "Total Expenditure": 1788206
  },
  {
    "Procedures": "Gynecomastia",
    "Part": "Breast",
    "Cost": 3345,
    "Total Expenditure": 91840320
  },
  {
    "Procedures": "Forehead lift",
    "Part": "Face and Head",
    "Cost": 3280,
    "Total Expenditure": 132676000
  },
  {
    "Procedures": "Liposuction",
    "Part": "Other",
    "Cost": 3009,
    "Total Expenditure": 668153180
  },
  {
    "Procedures": "Ear surgery (Otoplasty)",
    "Part": "Face and Head",
    "Cost": 2965,
    "Total Expenditure": 67347010
  },
  {
    "Procedures": "Eyelid Surgery",
    "Part": "Face and Head",
    "Cost": 2880,
    "Total Expenditure": 587380304
  },
  {
    "Procedures": "Cheek implant (Malar augmentation)",
    "Part": "Face and Head",
    "Cost": 2656,
    "Total Expenditure": 33646208
  },
  {
    "Procedures": "Breast implant removals (Augmentation patients only)",
    "Part": "Breast",
    "Cost": 2380,
    "Total Expenditure": 58693180
  },
  {
    "Procedures": "Chin augmentation (Mentoplasty)",
    "Part": "Face and Head",
    "Cost": 2097,
    "Total Expenditure": 36594747
  },
  {
    "Procedures": "Lip augmentation (other than injectable materials)",
    "Part": "Face and Head",
    "Cost": 1630,
    "Total Expenditure": 44741870
  },
  {
    "Procedures": "Dermabrasion",
    "Part": "Face and Head",
    "Cost": 1150,
    "Total Expenditure": 100298400
  }
];