const ICONS = {
  HOME: 'M 787.691406 80 C 766 80 748.308594 97.691406 748.308594 119.382812 L 748.308594 307.691406 L 540.308594 99.691406 C 524.921875 84.308594 499.078125 84.308594 483.691406 99.691406 L 22.152344 562.460938 C 6.769531 577.847656 6.769531 602.460938 22.152344 617.847656 C 37.539062 633.230469 62.152344 633.230469 77.539062 617.847656 L 512 183.382812 L 947.691406 619.078125 C 955.382812 626.769531 965.847656 631.382812 976 631.382812 C 986.152344 631.382812 995.382812 626.769531 1003.078125 619.078125 C 1018.460938 603.691406 1018.460938 579.078125 1003.078125 563.691406 L 866.460938 427.078125 L 866.460938 119.382812 C 866.460938 97.691406 848.769531 80 827.078125 80 Z M 512 256 L 78.769531 689.230469 L 78.769531 905.847656 C 78.769531 971.078125 131.691406 1024 196.921875 1024 L 827.078125 1024 C 892.308594 1024 945.230469 971.078125 945.230469 905.847656 L 945.230469 689.230469 Z M 433.230469 630.152344 L 590.769531 630.152344 C 612.460938 630.152344 630.152344 647.847656 630.152344 669.539062 L 630.152344 905.847656 C 630.152344 927.539062 612.460938 945.230469 590.769531 945.230469 L 433.230469 945.230469 C 411.539062 945.230469 393.847656 927.539062 393.847656 905.847656 L 393.847656 669.539062 C 393.847656 647.847656 411.539062 630.152344 433.230469 630.152344 Z M 433.230469 630.152344',
  PROFILE:
    'M 490.398438 0.480469 C 488.878906 0.640625 483.679688 1.199219 478.800781 1.679688 C 422.800781 7.039062 364.398438 29.921875 318.800781 64.324219 C 300.160156 78.324219 276.078125 101.523438 262.238281 118.804688 C 205.519531 189.527344 180.960938 278.332031 193.679688 366.816406 C 204.558594 442.496094 242 512.179688 298.398438 561.863281 C 309.679688 571.785156 325.601562 583.863281 336.640625 591.0625 L 344.078125 595.863281 L 339.839844 596.824219 C 328.480469 599.464844 302.078125 606.824219 289.601562 610.90625 C 156.238281 653.945312 57.921875 733.390625 18.800781 829.554688 C 6.800781 859.074219 0 892.597656 0 922.4375 C 0 930.835938 2.640625 973.480469 3.679688 981.398438 L 4.078125 984.839844 L 1019.921875 984.839844 L 1020.320312 981.398438 C 1021.359375 973.558594 1024 930.917969 1024 922.835938 C 1024 897.554688 1019.199219 869.394531 1010.640625 844.433594 C 975.761719 742.351562 877.359375 658.347656 738.800781 612.425781 C 723.441406 607.304688 693.921875 598.824219 685.601562 597.222656 C 684.078125 596.902344 682.320312 596.425781 681.761719 596.105469 C 681.199219 595.785156 685.039062 592.664062 692.160156 587.785156 C 722.238281 567.464844 747.441406 543.460938 768.960938 514.820312 C 776.71875 504.5 783.761719 493.859375 788.238281 485.941406 C 790.160156 482.5 793.519531 476.578125 795.601562 472.820312 C 801.039062 463.378906 808.558594 446.578125 813.921875 432.257812 C 833.28125 379.855469 838.480469 322.332031 828.800781 266.011719 C 822.878906 231.53125 809.441406 194.007812 791.921875 162.886719 C 785.199219 151.046875 772 131.605469 762.71875 120.003906 C 751.679688 106.164062 727.441406 81.921875 713.601562 70.882812 C 702.398438 61.921875 682.71875 48.5625 671.601562 42.242188 C 641.441406 25.199219 608.480469 12.800781 574.800781 6 C 554.800781 1.921875 542 0.71875 516.800781 0.398438 C 503.839844 0.238281 491.921875 0.320312 490.398438 0.480469 Z M 490.398438 0.480469',
  LOGIN:
    'M 875.460938 115.304688 L 378.046875 115.304688 C 296.71875 115.304688 230.554688 181.4375 230.554688 262.75 L 230.554688 467.210938 L 629.128906 467.210938 L 543.890625 381.964844 C 526.664062 364.707031 526.664062 336.636719 543.890625 319.390625 C 552.246094 311.03125 563.339844 306.425781 575.152344 306.425781 C 587.011719 306.425781 598.105469 311.035156 606.472656 319.390625 L 767.253906 480.175781 C 771.289062 484.195312 774.480469 488.960938 776.761719 494.359375 C 779.125 500.167969 780.21875 505.777344 780.21875 511.480469 C 780.21875 517.167969 779.140625 522.789062 776.933594 528.164062 C 774.574219 533.847656 771.378906 538.585938 767.375 542.671875 L 606.472656 703.542969 C 598.066406 711.894531 586.945312 716.480469 575.148438 716.480469 C 563.351562 716.480469 552.195312 711.894531 543.871094 703.542969 C 526.644531 686.253906 526.644531 658.183594 543.871094 640.941406 L 629.125 555.703125 L 230.550781 555.703125 L 230.550781 760.183594 C 230.550781 841.460938 296.71875 907.601562 378.046875 907.601562 L 875.457031 907.601562 C 956.785156 907.601562 1022.90625 841.460938 1022.90625 760.183594 L 1022.90625 262.769531 C 1022.910156 181.4375 956.789062 115.304688 875.460938 115.304688 Z M 875.460938 115.304688',
  SIGNUP:
    'M 992.96875 527.613281 L 843.222656 377.871094 C 823.878906 358.519531 792.503906 358.519531 773.152344 377.871094 L 743.226562 407.796875 L 743.226562 49.546875 C 743.226562 22.183594 721.042969 0 693.675781 0 L 66.066406 0 C 38.699219 0 16.515625 22.183594 16.515625 49.546875 L 16.515625 842.328125 C 16.515625 869.691406 38.699219 891.878906 66.066406 891.878906 L 346.839844 891.878906 L 346.839844 974.453125 C 346.839844 1001.816406 369.023438 1024 396.386719 1024 L 546.132812 1024 C 559.277344 1024 571.878906 1018.777344 581.167969 1009.484375 L 992.972656 597.683594 C 1012.324219 578.332031 1012.324219 546.964844 992.96875 527.613281 Z M 115.613281 99.097656 L 644.128906 99.097656 L 644.128906 506.894531 L 361.351562 789.664062 C 360.355469 790.660156 359.433594 791.710938 358.53125 792.777344 L 115.613281 792.777344 Z M 525.609375 924.902344 L 445.933594 924.902344 L 445.933594 845.226562 L 808.191406 482.972656 L 887.863281 562.648438 Z M 525.609375 924.902344',
  MENU: 'M 0 153.601562 L 0 256 L 1024 256 L 1024 153.601562 Z M 0 460.800781 L 0 563.199219 L 1024 563.199219 L 1024 460.800781 Z M 0 768 L 0 870.398438 L 1024 870.398438 L 1024 768 Z M 0 768 ',
  CLOSE:
    'M 200.832031 140.5 L 140.5 200.832031 L 451.667969 512 L 140.5 823.167969 L 200.832031 883.5 L 512 572.332031 L 823.167969 883.5 L 883.5 823.167969 L 572.332031 512 L 883.5 200.832031 L 823.167969 140.5 L 512 451.667969 Z M 200.832031 140.5',
  BUBBLE:
    'M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z',
  ENLARGE:
    'M1024 0v416l-160-160-192 192-96-96 192-192-160-160zM448 672l-192 192 160 160h-416v-416l160 160 192-192z',
  SHRINK:
    'M448 576v416l-160-160-192 192-96-96 192-192-160-160zM1024 96l-192 192 160 160h-416v-416l160 160 192-192z',
  BIN: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
  CLOUD_CHECK:
    'M892.268 514.49c2.442-11.108 3.732-22.646 3.732-34.49 0-88.366-71.634-160-160-160-14.224 0-28.014 1.868-41.134 5.352-24.796-77.352-97.288-133.352-182.866-133.352-87.348 0-161.054 58.336-184.326 138.17-22.742-6.62-46.792-10.17-71.674-10.17-141.384 0-256 114.616-256 256 0 141.382 114.616 256 256 256h608c88.366 0 160-71.632 160-160 0-78.718-56.854-144.16-131.732-157.51zM416 768l-160-160 64-64 96 96 224-224 64 64-288 288z',
  BOLD: 'M707.88 484.652c37.498-44.542 60.12-102.008 60.12-164.652 0-141.16-114.842-256-256-256h-320v896h384c141.158 0 256-114.842 256-256 0-92.956-49.798-174.496-124.12-219.348zM384 192h101.5c55.968 0 101.5 57.42 101.5 128s-45.532 128-101.5 128h-101.5v-256zM543 832h-159v-256h159c58.45 0 106 57.42 106 128s-47.55 128-106 128z',
  UNDERLINE:
    'M704 64h128v416c0 159.058-143.268 288-320 288-176.73 0-320-128.942-320-288v-416h128v416c0 40.166 18.238 78.704 51.354 108.506 36.896 33.204 86.846 51.494 140.646 51.494s103.75-18.29 140.646-51.494c33.116-29.802 51.354-68.34 51.354-108.506v-416zM192 832h640v128h-640z',
  ITALIC: 'M896 64v64h-128l-320 768h128v64h-448v-64h128l320-768h-128v-64z',
  PARAGRAPH_LEFT:
    'M0 64h1024v128h-1024zM0 256h640v128h-640zM0 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  PARAGRAPH_CENTER:
    'M0 64h1024v128h-1024zM192 256h640v128h-640zM192 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  PARAGRAPH_RIGHT:
    'M0 64h1024v128h-1024zM384 256h640v128h-640zM384 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  GOOGLE:
    'M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z',
  FACEBOOK:
    'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
  TWITTER:
    'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
  LINKEDIN:
    'M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z M64 384h192v576h-192v-576z M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z'
}

export default ICONS
