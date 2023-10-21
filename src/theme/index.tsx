export const AppColors = {

    Primary_900 : '#024447',
    Primary_800 : '#045651',
    Primary_700 : '#076B5B',
    Primary_600 : '#0A8061B',
    Primary_500 : '#0F9565',
    Primary_400 : '#3EBF84',
    Primary_300 : '#66DF9C',
    Primary_200 : '#9CF4BA',
    Primary_100 : '#CCF9D7',
    Primary_0 : '#FFFFFF',
    Success_900 : '#3B6506',
    Success_800 : '#4C7A0B',
    Success_700 : '#659711',
    Success_600 : '#7FB519',
    Success_500 : '#9CD323',
    Success_400 : '#BCE455',
    Success_300 : '#D3F178',
    Success_200 : '#E8FAA6',
    Success_100 : '#F5FCD2',

    Error_900 : '#7A0619',
    Error_800 : '#930B16',
    Error_700 : '#B71112',
    Error_600 : '#DB2719',
    Error_500 : '#FF4423',
    Error_400 : '#FF7F59',
    Error_300 : '#FFA37A',
    Error_200 : '#FFC8A6',
    Error_100 : '#FFE7D3',

    Warning_900 : '#7A4D0B',
    Warning_800 : '#936312',
    Warning_700 : '#B7821D',
    Warning_600 : '#DBA32A',
    Warning_500 : '#FFC73A',
    Warning_400 : '#FFD96B',
    Warning_300 : '#FFE488',
    Warning_200 : '#FFEFB0',
    Warning_100 : '#FFF8D7',

    Information_900 : '#102E7A',
    Information_800 : '#1A4393',
    Information_700 : '#2A60B7',
    Information_600 : '#3D81DB',
    Information_500 : '#54A6FF',
    Information_400 : '#7EC2FF',
    Information_300 : '#98D3FF',
    Information_200 : '#BAE5FF',
    Information_100 : '#DCF3FF',

    Secondary_900 : '#090305',
    Secondary_800 : '#0B0607',
    Secondary_700 : '#0D090A',
    Secondary_600 : '#100D0E',
    Secondary_500 : '#131313',
    Secondary_400 : '#717171',
    Secondary_300 : '#B8B8B8',
    Secondary_200 : '#E7E7E7',
    Secondary_100 : '#F3F3F3',

    Stroke : '#191919',
    Bg_white : '#FCFCFD',
    Bg_content : '#F3F4F7',
    Bg_content_2 : '#570DE6',



}

export const AppTextStyle = {

    h1: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_800ExtraBold',
      fontSize: fontSize || 20,
      lineHeight: 32,
      color: color || 'black',
    }),
    h2: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_700Bold',
      fontSize: fontSize || 16,
      lineHeight: 24,
  
      color: color || 'black',
    }),
    h3: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_600SemiBold',
      fontSize: fontSize || 14,
      color: color || 'black',
    }),
    h4: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_500Medium',
      fontSize: fontSize || 12,
      color: color || 'black',
    }),
    /* Body */
    Body: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_400Regular',
      fontSize: fontSize || 16,
      color: color || 'black',
    }),
    p: (color: string | undefined, fontSize?: number) => ({
      fontFamily: 'PlusJakartaSans_300Ligh',
      fontSize: fontSize || 14,
      color: color || 'black',
    }),
  };