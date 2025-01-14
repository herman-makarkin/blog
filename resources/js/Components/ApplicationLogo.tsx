import { useTheme } from '@/Hooks/theme';
import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    const theme = useTheme().isDark;

    if (theme) {
        return (

            <>
                <svg {...props} width="1159" height="280" viewBox="0 0 1159 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="220" height="280" rx="33" fill="#D8D8D8" />
                    <circle cx="32.5" cy="33.5" r="17.5" fill="#3D6387" />
                    <path d="M73 33H186" stroke="#3D6387" stroke-width="25" stroke-linecap="round" />
                    <path d="M33 92H188" stroke="#204589" stroke-width="20" stroke-linecap="round" />
                    <path d="M33 132H109" stroke="#204589" stroke-width="20" stroke-linecap="round" />
                    <path d="M137 132H186" stroke="#276B6B" stroke-width="20" stroke-linecap="round" />
                    <path d="M33 171H188" stroke="#276B6B" stroke-width="20" stroke-linecap="round" />
                    <path d="M32 211H187" stroke="#276B6B" stroke-width="20" stroke-linecap="round" />
                    <path d="M32 249H161" stroke="#276B6B" stroke-width="20" stroke-linecap="round" />
                    <path d="M298 161H1049" stroke="#D8D8D8" stroke-width="10" stroke-linecap="round" />
                    <path d="M319.912 140C310.141 140 302.909 137.675 298.216 133.024C293.565 128.331 291.24 121.099 291.24 111.328V81.888C291.24 72.032 293.565 64.7787 298.216 60.128C302.867 55.4347 310.056 53.1307 319.784 53.216H335.272C343.293 53.216 349.416 54.88 353.64 58.208C357.864 61.4933 360.317 66.6987 361 73.824C361.256 75.616 360.915 76.9813 359.976 77.92C359.037 78.8587 357.672 79.328 355.88 79.328C352.637 79.328 350.76 77.536 350.248 73.952C349.821 70.0267 348.456 67.3813 346.152 66.016C343.891 64.6507 340.264 63.968 335.272 63.968H319.784C315.261 63.9253 311.699 64.4373 309.096 65.504C306.536 66.5707 304.701 68.4267 303.592 71.072C302.525 73.6747 301.992 77.28 301.992 81.888V111.328C301.992 115.893 302.525 119.477 303.592 122.08C304.701 124.683 306.557 126.539 309.16 127.648C311.763 128.715 315.347 129.248 319.912 129.248H335.272C340.264 129.248 343.891 128.565 346.152 127.2C348.456 125.792 349.821 123.147 350.248 119.264C350.76 115.68 352.637 113.888 355.88 113.888C357.672 113.888 359.037 114.357 359.976 115.296C360.915 116.235 361.256 117.6 361 119.392C360.317 126.56 357.864 131.787 353.64 135.072C349.416 138.357 343.293 140 335.272 140H319.912ZM400.905 140C393.737 140 388.404 138.251 384.905 134.752C381.406 131.253 379.657 125.92 379.657 118.752C379.657 111.584 381.385 106.251 384.841 102.752C388.34 99.2533 393.694 97.504 400.905 97.504H427.977C427.721 93.024 426.548 89.9733 424.457 88.352C422.366 86.688 418.782 85.856 413.705 85.856H406.281C402.014 85.856 398.836 86.1547 396.745 86.752C394.654 87.3067 393.182 88.3307 392.329 89.824C391.561 91.616 390.772 92.8533 389.961 93.536C389.15 94.2187 387.934 94.56 386.313 94.56C384.521 94.56 383.113 94.0693 382.089 93.088C381.065 92.064 380.766 90.72 381.193 89.056C382.473 84.2347 385.14 80.7147 389.193 78.496C393.289 76.2347 398.985 75.104 406.281 75.104H413.705C422.238 75.104 428.553 77.152 432.649 81.248C436.745 85.344 438.793 91.6587 438.793 100.192V134.624C438.793 138.208 437.001 140 433.417 140C429.833 140 428.041 138.208 428.041 134.624V131.744C423.476 137.248 416.82 140 408.073 140H400.905ZM400.905 129.248H408.073C411.23 129.248 414.196 128.971 416.969 128.416C419.742 127.819 422.11 126.752 424.073 125.216C426.078 123.68 427.401 121.483 428.041 118.624V108.256H400.905C396.681 108.256 393.865 108.96 392.457 110.368C391.092 111.776 390.409 114.571 390.409 118.752C390.409 122.976 391.092 125.792 392.457 127.2C393.865 128.565 396.681 129.248 400.905 129.248ZM479.419 140C474 140 469.712 138.891 466.555 136.672C463.398 134.411 461.371 131.04 460.475 126.56C460.176 124.768 460.518 123.36 461.499 122.336C462.523 121.312 463.931 120.8 465.723 120.8C467.472 120.8 468.731 121.248 469.499 122.144C470.31 122.997 470.971 124.299 471.483 126.048C471.995 127.328 472.848 128.181 474.043 128.608C475.28 129.035 477.072 129.248 479.419 129.248H500.411C503.739 129.248 505.979 128.715 507.131 127.648C508.283 126.539 508.859 124.256 508.859 120.8C508.859 117.387 508.283 115.125 507.131 114.016C505.979 112.907 503.739 112.352 500.411 112.352H479.803C473.659 112.352 469.03 110.795 465.915 107.68C462.8 104.565 461.243 99.936 461.243 93.792C461.243 87.52 462.758 82.848 465.787 79.776C468.859 76.6613 473.531 75.104 479.803 75.104H499.771C509.798 75.104 515.728 79.328 517.563 87.776C517.904 89.568 517.563 90.9547 516.539 91.936C515.515 92.9173 514.107 93.408 512.315 93.408C510.651 93.408 509.414 92.9813 508.603 92.128C507.792 91.232 507.152 89.9947 506.683 88.416C506.171 87.392 505.382 86.7093 504.315 86.368C503.291 86.0267 501.776 85.856 499.771 85.856H479.803C476.56 85.856 474.448 86.3467 473.467 87.328C472.486 88.3093 471.995 90.464 471.995 93.792C471.995 96.864 472.507 98.9333 473.531 100C474.598 101.067 476.688 101.6 479.803 101.6H500.411C506.811 101.6 511.611 103.2 514.811 106.4C518.011 109.6 519.611 114.4 519.611 120.8C519.611 127.243 518.011 132.064 514.811 135.264C511.611 138.421 506.811 140 500.411 140H479.419ZM564.453 140C555.962 140 549.648 137.952 545.509 133.856C541.413 129.717 539.365 123.403 539.365 114.912V100.064C539.365 91.5307 541.392 85.216 545.445 81.12C549.541 77.024 555.877 75.0187 564.453 75.104H574.949C581.306 75.104 586.298 76.1707 589.925 78.304C593.594 80.4373 595.941 83.7227 596.965 88.16C597.349 89.952 597.029 91.3387 596.005 92.32C595.024 93.3013 593.594 93.792 591.717 93.792C590.053 93.792 588.837 93.3653 588.069 92.512C587.301 91.6587 586.597 90.464 585.957 88.928C585.317 87.776 584.144 86.9867 582.437 86.56C580.73 86.0907 578.234 85.856 574.949 85.856H564.453C558.949 85.7707 555.173 86.7307 553.125 88.736C551.12 90.6987 550.117 94.4747 550.117 100.064V114.912C550.117 120.459 551.12 124.235 553.125 126.24C555.173 128.245 558.949 129.248 564.453 129.248H574.949C578.234 129.248 580.73 129.035 582.437 128.608C584.144 128.139 585.317 127.328 585.957 126.176C586.597 124.555 587.301 123.339 588.069 122.528C588.88 121.717 590.138 121.312 591.845 121.312C593.637 121.312 595.024 121.803 596.005 122.784C597.029 123.765 597.349 125.152 596.965 126.944C595.941 131.339 593.594 134.624 589.925 136.8C586.298 138.933 581.306 140 574.949 140H564.453ZM636.78 140C629.612 140 624.279 138.251 620.78 134.752C617.281 131.253 615.532 125.92 615.532 118.752C615.532 111.584 617.26 106.251 620.716 102.752C624.215 99.2533 629.569 97.504 636.78 97.504H663.852C663.596 93.024 662.423 89.9733 660.332 88.352C658.241 86.688 654.657 85.856 649.58 85.856H642.156C637.889 85.856 634.711 86.1547 632.62 86.752C630.529 87.3067 629.057 88.3307 628.204 89.824C627.436 91.616 626.647 92.8533 625.836 93.536C625.025 94.2187 623.809 94.56 622.188 94.56C620.396 94.56 618.988 94.0693 617.964 93.088C616.94 92.064 616.641 90.72 617.068 89.056C618.348 84.2347 621.015 80.7147 625.068 78.496C629.164 76.2347 634.86 75.104 642.156 75.104H649.58C658.113 75.104 664.428 77.152 668.524 81.248C672.62 85.344 674.668 91.6587 674.668 100.192V134.624C674.668 138.208 672.876 140 669.292 140C665.708 140 663.916 138.208 663.916 134.624V131.744C659.351 137.248 652.695 140 643.948 140H636.78ZM636.78 129.248H643.948C647.105 129.248 650.071 128.971 652.844 128.416C655.617 127.819 657.985 126.752 659.948 125.216C661.953 123.68 663.276 121.483 663.916 118.624V108.256H636.78C632.556 108.256 629.74 108.96 628.332 110.368C626.967 111.776 626.284 114.571 626.284 118.752C626.284 122.976 626.967 125.792 628.332 127.2C629.74 128.565 632.556 129.248 636.78 129.248ZM722.078 140C713.587 140 707.273 137.952 703.134 133.856C699.038 129.717 696.99 123.403 696.99 114.912V100.192C696.99 91.6587 699.038 85.344 703.134 81.248C707.273 77.152 713.587 75.104 722.078 75.104H746.91V55.264C746.91 51.68 748.702 49.888 752.286 49.888C755.87 49.888 757.662 51.68 757.662 55.264V134.624C757.662 138.208 755.87 140 752.286 140C748.702 140 746.91 138.208 746.91 134.624V133.728C744.905 135.776 742.281 137.333 739.038 138.4C735.795 139.467 731.763 140 726.942 140H722.078ZM722.078 129.248H726.942C732.574 129.248 737.31 128.523 741.15 127.072C744.99 125.621 746.91 123.403 746.91 120.416V85.856H722.078C716.531 85.856 712.755 86.88 710.75 88.928C708.745 90.9333 707.742 94.688 707.742 100.192V114.912C707.742 120.459 708.745 124.235 710.75 126.24C712.798 128.245 716.574 129.248 722.078 129.248ZM790.742 111.968V115.04C790.742 120.544 791.745 124.299 793.75 126.304C795.755 128.267 799.531 129.248 805.078 129.248H815.574C819.926 129.248 823.147 128.843 825.238 128.032C827.329 127.221 828.715 125.792 829.398 123.744C829.867 122.123 830.507 120.885 831.318 120.032C832.171 119.179 833.451 118.752 835.158 118.752C836.95 118.752 838.315 119.221 839.254 120.16C840.193 121.099 840.491 122.464 840.15 124.256C839.211 129.547 836.694 133.493 832.598 136.096C828.502 138.699 822.827 140 815.574 140H805.078C796.587 140 790.273 137.952 786.134 133.856C782.038 129.76 779.99 123.488 779.99 115.04V100.192C779.99 91.5307 782.038 85.1733 786.134 81.12C790.273 77.024 796.587 75.0187 805.078 75.104H815.574C824.107 75.104 830.422 77.152 834.518 81.248C838.614 85.3013 840.662 91.616 840.662 100.192V106.592C840.662 110.176 838.87 111.968 835.286 111.968H790.742ZM805.078 85.856C799.531 85.7707 795.755 86.7307 793.75 88.736C791.745 90.7413 790.742 94.56 790.742 100.192V101.216H829.91V100.192C829.91 94.6027 828.907 90.8267 826.902 88.864C824.939 86.8587 821.163 85.856 815.574 85.856H805.078ZM869.563 140C865.979 140 864.187 138.208 864.187 134.624V58.592C864.187 55.008 865.979 53.216 869.563 53.216H902.971C909.755 53.216 914.96 55.008 918.587 58.592C922.256 62.176 924.091 67.296 924.091 73.952V77.408C924.091 83.168 922.278 87.6267 918.651 90.784C925.435 94.5813 928.827 101.515 928.827 111.584V115.936C928.827 123.787 926.736 129.76 922.555 133.856C918.416 137.952 912.443 140 904.635 140H869.563ZM874.939 129.248H904.635C909.456 129.248 912.891 128.224 914.939 126.176C917.03 124.085 918.075 120.672 918.075 115.936V111.584C918.075 106.848 917.072 103.477 915.067 101.472C913.062 99.424 909.584 98.4 904.635 98.4H874.939V129.248ZM874.939 87.648H905.275C908.39 87.648 910.502 86.688 911.611 84.768C912.763 82.848 913.339 80.3947 913.339 77.408V73.952C913.339 70.24 912.571 67.6587 911.035 66.208C909.499 64.7147 906.811 63.968 902.971 63.968H874.939V87.648ZM969.64 140C963.112 140 958.248 138.4 955.048 135.2C951.891 131.957 950.312 127.072 950.312 120.544V55.264C950.312 51.68 952.104 49.888 955.688 49.888C959.272 49.888 961.064 51.68 961.064 55.264V120.544C961.064 124 961.619 126.325 962.728 127.52C963.88 128.672 966.184 129.248 969.64 129.248C973.309 129.248 975.144 131.04 975.144 134.624C975.272 138.208 973.437 140 969.64 140ZM1013.7 140C1005.21 140 998.898 137.952 994.759 133.856C990.663 129.76 988.615 123.488 988.615 115.04V100.192C988.615 91.616 990.663 85.3013 994.759 81.248C998.898 77.152 1005.21 75.104 1013.7 75.104H1024.2C1032.73 75.104 1039.05 77.152 1043.14 81.248C1047.24 85.344 1049.29 91.6587 1049.29 100.192V114.912C1049.29 123.403 1047.24 129.717 1043.14 133.856C1039.05 137.952 1032.73 140 1024.2 140H1013.7ZM999.367 115.04C999.367 120.544 1000.37 124.299 1002.38 126.304C1004.38 128.267 1008.16
129.248 1013.7 129.248H1024.2C1029.79 129.248 1033.56 128.245 1035.53 126.24C1037.53 124.235 1038.54 120.459 1038.54 114.912V100.192C1038.54 94.6027 1037.53 90.8267 1035.53 88.864C1033.56 86.8587 1029.79 85.856 1024.2 85.856H1013.7C1009.99 85.856 1007.09 86.2827 1005 87.136C1002.95 87.9467 1001.5 89.3973 1000.65 91.488C999.794 93.536 999.367 96.4373 999.367 100.192V115.04ZM1088.17 165.6C1083.01 165.6 1078.93 164.555 1075.95 162.464C1073 160.373 1071.11 157.195 1070.25 152.928C1069.95 151.136 1070.27 149.728 1071.21 148.704C1072.15 147.68 1073.58 147.168 1075.5 147.168C1077.12 147.168 1078.29 147.595 1079.02 148.448C1079.79 149.344 1080.45 150.667 1081 152.416C1081.52 153.355 1082.31 153.995 1083.37 154.336C1084.48 154.677 1086.08 154.848 1088.17 154.848H1111.98C1115.18 154.848 1117.25 154.336 1118.19 153.312C1119.17 152.331 1119.66 150.283 1119.66 147.168V132.256C1117.36 134.773 1114.5 136.693 1111.08 138.016C1107.71 139.339 1103.92 140 1099.69 140H1094.83C1086.34 140 1080.02 137.952 1075.88 133.856C1071.79 129.76 1069.74 123.488 1069.74 115.04V100.192C1069.74 91.616 1071.77 85.3013 1075.82 81.248C1079.92 77.152 1086.25 75.104 1094.83 75.104H1105.32C1108.35 75.104 1111.06 75.552 1113.45 76.448C1115.88 77.344 1117.95 78.7093 1119.66 80.544V80.48C1119.66 76.896 1121.45 75.104 1125.04 75.104C1128.62 75.104 1130.41 76.896 1130.41 80.48V147.168C1130.41 153.44 1128.9 158.069 1125.87 161.056C1122.88 164.085 1118.25 165.6 1111.98 165.6H1088.17ZM1094.83 129.248H1099.69C1105.32 129.248 1110.06 128.544 1113.9 127.136C1117.74 125.728 1119.66 123.488 1119.66 120.416V94.816C1119.66 91.36 1118.4 89.0133 1115.88 87.776C1113.41 86.496 1109.89 85.856 1105.32 85.856H1094.83C1089.32 85.856 1085.55 86.8373 1083.5 88.8C1081.49 90.7627 1080.49 94.56 1080.49 100.192V115.04C1080.49 120.459 1081.49 124.192 1083.5 126.24C1085.51 128.245 1089.28 129.248 1094.83 129.248Z" fill="#D8D8D8" />
                </svg>
            </>
        )
    }

    return (
        <>
            <svg {...props} width="1159" height="280" viewBox="0 0 1159 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="220" height="280" rx="33" fill="#7E7E7E" />
                <circle cx="32.5" cy="33.5" r="17.5" fill="#4AA8FF" />
                <path d="M73 33H186" stroke="#4AA8FF" stroke-width="25" stroke-linecap="round" />
                <path d="M33 92H188" stroke="#505BD3" stroke-width="20" stroke-linecap="round" />
                <path d="M33 132H109" stroke="#505BD3" stroke-width="20" stroke-linecap="round" />
                <path d="M137 132H186" stroke="#38C6D0" stroke-width="20" stroke-linecap="round" />
                <path d="M33 171H188" stroke="#38C6D0" stroke-width="20" stroke-linecap="round" />
                <path d="M32 211H187" stroke="#38C6D0" stroke-width="20" stroke-linecap="round" />
                <path d="M32 249H161" stroke="#38C6D0" stroke-width="20" stroke-linecap="round" />
                <path d="M298 161H1049" stroke="#323232" stroke-width="10" stroke-linecap="round" />
                <path d="M319.912 140C310.141 140 302.909 137.675 298.216 133.024C293.565 128.331 291.24 121.099 291.24 111.328V81.888C291.24 72.032 293.565 64.7787 298.216 60.128C302.867 55.4347 310.056 53.1307 319.784 53.216H335.272C343.293 53.216 349.416 54.88 353.64 58.208C357.864 61.4933 360.317 66.6987 361 73.824C361.256 75.616 360.915 76.9813 359.976 77.92C359.037 78.8587 357.672 79.328 355.88 79.328C352.637 79.328 350.76 77.536 350.248 73.952C349.821 70.0267 348.456 67.3813 346.152 66.016C343.891 64.6507 340.264 63.968 335.272 63.968H319.784C315.261 63.9253 311.699 64.4373 309.096 65.504C306.536 66.5707 304.701 68.4267 303.592 71.072C302.525 73.6747 301.992 77.28 301.992 81.888V111.328C301.992 115.893 302.525 119.477 303.592 122.08C304.701 124.683 306.557 126.539 309.16 127.648C311.763 128.715 315.347 129.248 319.912 129.248H335.272C340.264 129.248 343.891 128.565 346.152 127.2C348.456 125.792 349.821 123.147 350.248 119.264C350.76 115.68 352.637 113.888 355.88 113.888C357.672 113.888 359.037 114.357 359.976 115.296C360.915 116.235 361.256 117.6 361 119.392C360.317 126.56 357.864 131.787 353.64 135.072C349.416 138.357 343.293 140 335.272 140H319.912ZM400.905 140C393.737 140 388.404 138.251 384.905 134.752C381.406 131.253 379.657 125.92 379.657 118.752C379.657 111.584 381.385 106.251 384.841 102.752C388.34 99.2533 393.694 97.504 400.905 97.504H427.977C427.721 93.024 426.548 89.9733 424.457 88.352C422.366 86.688 418.782 85.856 413.705 85.856H406.281C402.014 85.856 398.836 86.1547 396.745 86.752C394.654 87.3067 393.182 88.3307 392.329 89.824C391.561 91.616 390.772 92.8533 389.961 93.536C389.15 94.2187 387.934 94.56 386.313 94.56C384.521 94.56 383.113 94.0693 382.089 93.088C381.065 92.064 380.766 90.72 381.193 89.056C382.473 84.2347 385.14 80.7147 389.193 78.496C393.289 76.2347 398.985 75.104 406.281 75.104H413.705C422.238 75.104 428.553 77.152 432.649 81.248C436.745 85.344 438.793 91.6587 438.793 100.192V134.624C438.793 138.208 437.001 140 433.417 140C429.833 140 428.041 138.208 428.041 134.624V131.744C423.476 137.248 416.82 140 408.073 140H400.905ZM400.905 129.248H408.073C411.23 129.248 414.196 128.971 416.969 128.416C419.742 127.819 422.11 126.752 424.073 125.216C426.078 123.68 427.401 121.483 428.041 118.624V108.256H400.905C396.681 108.256 393.865 108.96 392.457 110.368C391.092 111.776 390.409 114.571 390.409 118.752C390.409 122.976 391.092 125.792 392.457 127.2C393.865 128.565 396.681 129.248 400.905 129.248ZM479.419 140C474 140 469.712 138.891 466.555 136.672C463.398 134.411 461.371 131.04 460.475 126.56C460.176 124.768 460.518 123.36 461.499 122.336C462.523 121.312 463.931 120.8 465.723 120.8C467.472 120.8 468.731 121.248 469.499 122.144C470.31 122.997 470.971 124.299 471.483 126.048C471.995 127.328 472.848 128.181 474.043 128.608C475.28 129.035 477.072 129.248 479.419 129.248H500.411C503.739 129.248 505.979 128.715 507.131 127.648C508.283 126.539 508.859 124.256 508.859 120.8C508.859 117.387 508.283 115.125 507.131 114.016C505.979 112.907 503.739 112.352 500.411 112.352H479.803C473.659 112.352 469.03 110.795 465.915 107.68C462.8 104.565 461.243 99.936 461.243 93.792C461.243 87.52 462.758 82.848 465.787 79.776C468.859 76.6613 473.531 75.104 479.803 75.104H499.771C509.798 75.104 515.728 79.328 517.563 87.776C517.904 89.568 517.563 90.9547 516.539 91.936C515.515 92.9173 514.107 93.408 512.315 93.408C510.651 93.408 509.414 92.9813 508.603 92.128C507.792 91.232 507.152 89.9947 506.683 88.416C506.171 87.392 505.382 86.7093 504.315 86.368C503.291 86.0267 501.776 85.856 499.771 85.856H479.803C476.56 85.856 474.448 86.3467 473.467 87.328C472.486 88.3093 471.995 90.464 471.995 93.792C471.995 96.864 472.507 98.9333 473.531 100C474.598 101.067 476.688 101.6 479.803 101.6H500.411C506.811 101.6 511.611 103.2 514.811 106.4C518.011 109.6 519.611 114.4 519.611 120.8C519.611 127.243 518.011 132.064 514.811 135.264C511.611 138.421 506.811 140 500.411 140H479.419ZM564.453 140C555.962 140 549.648 137.952 545.509 133.856C541.413 129.717 539.365 123.403 539.365 114.912V100.064C539.365 91.5307 541.392 85.216 545.445 81.12C549.541 77.024 555.877 75.0187 564.453 75.104H574.949C581.306 75.104 586.298 76.1707 589.925 78.304C593.594 80.4373 595.941 83.7227 596.965 88.16C597.349 89.952 597.029 91.3387 596.005 92.32C595.024 93.3013 593.594 93.792 591.717 93.792C590.053 93.792 588.837 93.3653 588.069 92.512C587.301 91.6587 586.597 90.464 585.957 88.928C585.317 87.776 584.144 86.9867 582.437 86.56C580.73 86.0907 578.234 85.856 574.949 85.856H564.453C558.949 85.7707 555.173 86.7307 553.125 88.736C551.12 90.6987 550.117 94.4747 550.117 100.064V114.912C550.117 120.459 551.12 124.235 553.125 126.24C555.173 128.245 558.949 129.248 564.453 129.248H574.949C578.234 129.248 580.73 129.035 582.437 128.608C584.144 128.139 585.317 127.328 585.957 126.176C586.597 124.555 587.301 123.339 588.069 122.528C588.88 121.717 590.138 121.312 591.845 121.312C593.637 121.312 595.024 121.803 596.005 122.784C597.029 123.765 597.349 125.152 596.965 126.944C595.941 131.339 593.594 134.624 589.925 136.8C586.298 138.933 581.306 140 574.949 140H564.453ZM636.78 140C629.612 140 624.279 138.251 620.78 134.752C617.281 131.253 615.532 125.92 615.532 118.752C615.532 111.584 617.26 106.251 620.716 102.752C624.215 99.2533 629.569 97.504 636.78 97.504H663.852C663.596 93.024 662.423 89.9733 660.332 88.352C658.241 86.688 654.657 85.856 649.58 85.856H642.156C637.889 85.856 634.711 86.1547 632.62 86.752C630.529 87.3067 629.057 88.3307 628.204 89.824C627.436 91.616 626.647 92.8533 625.836 93.536C625.025 94.2187 623.809 94.56 622.188 94.56C620.396 94.56 618.988 94.0693 617.964 93.088C616.94 92.064 616.641 90.72 617.068 89.056C618.348 84.2347 621.015 80.7147 625.068 78.496C629.164 76.2347 634.86 75.104 642.156 75.104H649.58C658.113 75.104 664.428 77.152 668.524 81.248C672.62 85.344 674.668 91.6587 674.668 100.192V134.624C674.668 138.208 672.876 140 669.292 140C665.708 140 663.916 138.208 663.916 134.624V131.744C659.351 137.248 652.695 140 643.948 140H636.78ZM636.78 129.248H643.948C647.105 129.248 650.071 128.971 652.844 128.416C655.617 127.819 657.985 126.752 659.948 125.216C661.953 123.68 663.276 121.483 663.916 118.624V108.256H636.78C632.556 108.256 629.74 108.96 628.332 110.368C626.967 111.776 626.284 114.571 626.284 118.752C626.284 122.976 626.967 125.792 628.332 127.2C629.74 128.565 632.556 129.248 636.78 129.248ZM722.078 140C713.587 140 707.273 137.952 703.134 133.856C699.038 129.717 696.99 123.403 696.99 114.912V100.192C696.99 91.6587 699.038 85.344 703.134 81.248C707.273 77.152 713.587 75.104 722.078 75.104H746.91V55.264C746.91 51.68 748.702 49.888 752.286 49.888C755.87 49.888 757.662 51.68 757.662 55.264V134.624C757.662 138.208 755.87 140 752.286 140C748.702 140 746.91 138.208 746.91 134.624V133.728C744.905 135.776 742.281 137.333 739.038 138.4C735.795 139.467 731.763 140 726.942 140H722.078ZM722.078 129.248H726.942C732.574 129.248 737.31 128.523 741.15 127.072C744.99 125.621 746.91 123.403 746.91 120.416V85.856H722.078C716.531 85.856 712.755 86.88 710.75 88.928C708.745 90.9333 707.742 94.688 707.742 100.192V114.912C707.742 120.459 708.745 124.235 710.75 126.24C712.798 128.245 716.574 129.248 722.078 129.248ZM790.742 111.968V115.04C790.742 120.544 791.745 124.299 793.75 126.304C795.755 128.267 799.531 129.248 805.078 129.248H815.574C819.926 129.248 823.147 128.843 825.238 128.032C827.329 127.221 828.715 125.792 829.398 123.744C829.867 122.123 830.507 120.885 831.318 120.032C832.171 119.179 833.451 118.752 835.158 118.752C836.95 118.752 838.315 119.221 839.254 120.16C840.193 121.099 840.491 122.464 840.15 124.256C839.211 129.547 836.694 133.493 832.598 136.096C828.502 138.699 822.827 140 815.574 140H805.078C796.587 140 790.273 137.952 786.134 133.856C782.038 129.76 779.99 123.488 779.99 115.04V100.192C779.99 91.5307 782.038 85.1733 786.134 81.12C790.273 77.024 796.587 75.0187 805.078 75.104H815.574C824.107 75.104 830.422 77.152 834.518 81.248C838.614 85.3013 840.662 91.616 840.662 100.192V106.592C840.662 110.176 838.87 111.968 835.286 111.968H790.742ZM805.078 85.856C799.531 85.7707 795.755 86.7307 793.75 88.736C791.745 90.7413 790.742 94.56 790.742 100.192V101.216H829.91V100.192C829.91 94.6027 828.907 90.8267 826.902 88.864C824.939 86.8587 821.163 85.856 815.574 85.856H805.078ZM869.563 140C865.979 140 864.187 138.208 864.187 134.624V58.592C864.187 55.008 865.979 53.216 869.563 53.216H902.971C909.755 53.216 914.96 55.008 918.587 58.592C922.256 62.176 924.091 67.296 924.091 73.952V77.408C924.091 83.168 922.278 87.6267 918.651 90.784C925.435 94.5813 928.827 101.515 928.827 111.584V115.936C928.827 123.787 926.736 129.76 922.555 133.856C918.416 137.952 912.443 140 904.635 140H869.563ZM874.939 129.248H904.635C909.456 129.248 912.891 128.224 914.939 126.176C917.03 124.085 918.075 120.672 918.075 115.936V111.584C918.075 106.848 917.072 103.477 915.067 101.472C913.062 99.424 909.584 98.4 904.635 98.4H874.939V129.248ZM874.939 87.648H905.275C908.39 87.648 910.502 86.688 911.611 84.768C912.763 82.848 913.339 80.3947 913.339 77.408V73.952C913.339 70.24 912.571 67.6587 911.035 66.208C909.499 64.7147 906.811 63.968 902.971 63.968H874.939V87.648ZM969.64 140C963.112 140 958.248 138.4 955.048 135.2C951.891 131.957 950.312 127.072 950.312 120.544V55.264C950.312 51.68 952.104 49.888 955.688 49.888C959.272 49.888 961.064 51.68 961.064 55.264V120.544C961.064 124 961.619 126.325 962.728 127.52C963.88 128.672 966.184 129.248 969.64 129.248C973.309 129.248 975.144 131.04 975.144 134.624C975.272 138.208 973.437 140 969.64 140ZM1013.7 140C1005.21 140 998.898 137.952 994.759 133.856C990.663 129.76 988.615 123.488 988.615 115.04V100.192C988.615 91.616 990.663 85.3013 994.759 81.248C998.898 77.152 1005.21 75.104 1013.7 75.104H1024.2C1032.73 75.104 1039.05 77.152 1043.14 81.248C1047.24 85.344 1049.29 91.6587 1049.29 100.192V114.912C1049.29 123.403 1047.24 129.717 1043.14 133.856C1039.05 137.952 1032.73 140 1024.2 140H1013.7ZM999.367 115.04C999.367 120.544 1000.37 124.299 1002.38 126.304C1004.38 128.267 1008.16
129.248 1013.7 129.248H1024.2C1029.79 129.248 1033.56 128.245 1035.53 126.24C1037.53 124.235 1038.54 120.459 1038.54 114.912V100.192C1038.54 94.6027 1037.53 90.8267 1035.53 88.864C1033.56 86.8587 1029.79 85.856 1024.2 85.856H1013.7C1009.99 85.856 1007.09 86.2827 1005 87.136C1002.95 87.9467 1001.5 89.3973 1000.65 91.488C999.794 93.536 999.367 96.4373 999.367 100.192V115.04ZM1088.17 165.6C1083.01 165.6 1078.93 164.555 1075.95 162.464C1073 160.373 1071.11 157.195 1070.25 152.928C1069.95 151.136 1070.27 149.728 1071.21 148.704C1072.15 147.68 1073.58 147.168 1075.5 147.168C1077.12 147.168 1078.29 147.595 1079.02 148.448C1079.79 149.344 1080.45 150.667 1081 152.416C1081.52 153.355 1082.31 153.995 1083.37 154.336C1084.48 154.677 1086.08 154.848 1088.17 154.848H1111.98C1115.18 154.848 1117.25 154.336 1118.19 153.312C1119.17 152.331 1119.66 150.283 1119.66 147.168V132.256C1117.36 134.773 1114.5 136.693 1111.08 138.016C1107.71 139.339 1103.92 140 1099.69 140H1094.83C1086.34 140 1080.02 137.952 1075.88 133.856C1071.79 129.76 1069.74 123.488 1069.74 115.04V100.192C1069.74 91.616 1071.77 85.3013 1075.82 81.248C1079.92 77.152 1086.25 75.104 1094.83 75.104H1105.32C1108.35 75.104 1111.06 75.552 1113.45 76.448C1115.88 77.344 1117.95 78.7093 1119.66 80.544V80.48C1119.66 76.896 1121.45 75.104 1125.04 75.104C1128.62 75.104 1130.41 76.896 1130.41 80.48V147.168C1130.41 153.44 1128.9 158.069 1125.87 161.056C1122.88 164.085 1118.25 165.6 1111.98 165.6H1088.17ZM1094.83 129.248H1099.69C1105.32 129.248 1110.06 128.544 1113.9 127.136C1117.74 125.728 1119.66 123.488 1119.66 120.416V94.816C1119.66 91.36 1118.4 89.0133 1115.88 87.776C1113.41 86.496 1109.89 85.856 1105.32 85.856H1094.83C1089.32 85.856 1085.55 86.8373 1083.5 88.8C1081.49 90.7627 1080.49 94.56 1080.49 100.192V115.04C1080.49 120.459 1081.49 124.192 1083.5 126.24C1085.51 128.245 1089.28 129.248 1094.83 129.248Z" fill="#323232" />
            </svg>

        </>
    )
}
