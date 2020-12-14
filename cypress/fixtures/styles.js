import Color from 'color';

const rgba = (hex) => Color(hex).string();

export default {
  navLinkColors: {
    default: rgba('#707070'),
    // These corralate to the category colors listed in _brand.scss
    lifeCurrent: rgba('#009f5e'),
    parentingCurrent: rgba('#42274b'),
    homeCurrent: rgba('#1e859f'),
    petsCurrent: rgba('#778a74'),
    healthCurrent: rgba('#e44d50'),
    astrologyCurrent: rgba('#621300'),
    odditiesCurrent: rgba('#ffc036'),
  },
  formColors: {
    default: rgba('#ced4da'),
    valid: rgba('#28a745'),
    invalid: rgba('#dc3545'),
  },
};
