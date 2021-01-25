import {Dimensions, Platform, PixelRatio} from 'react-native';

// window width and height from design
const standardWidth = 414;
const standardHeight = 800;
// window width and height in DP
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// window width and height in Pixel
const windowWidthPixel = PixelRatio.getPixelSizeForLayoutSize(windowWidth);
const windowHeightPixel = PixelRatio.getPixelSizeForLayoutSize(windowHeight);

function scaleWidth(number: number) {
  return (number / standardWidth) * windowWidth;
}

function scaleHeight(number: number) {
  return (number / standardHeight) * windowHeight;
}

function scaleWidthHeight(width: number, height: number, respsectRatio: boolean = false) {
  const responsiveWidth = scaleWidth(width);
  if (height) {
    return {
      width: responsiveWidth,
      height: respsectRatio
        ? (height / width) * responsiveWidth
        : scaleHeight(height),
    };
  }
  // if only 1 dimension is specified, it's a square
  return {width: responsiveWidth, height: responsiveWidth};
}

function circle(number: number) {
  return {
    width: number,
    height: number,
    borderRadius: number / 2,
  };
}

const IS_IOS = Platform.OS === 'ios';

const IS_IPHONE_X =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (windowHeight === 812 ||
    windowWidth === 812 ||
    windowHeight === 896 ||
    windowWidth === 896);

const boxShadow = (direction: 'top' | 'bottom') => ({
  shadowColor: 'rgba(0, 0, 0, .4)',
  shadowOffset:
    direction === 'top' ? {width: 0, height: -2} : {width: 0, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
});

export {
  windowWidth,
  windowHeight,
  windowWidthPixel,
  windowHeightPixel,
  scaleWidth,
  scaleHeight,
  scaleWidthHeight,
  circle,
  IS_IOS,
  IS_IPHONE_X,
  boxShadow,
};
