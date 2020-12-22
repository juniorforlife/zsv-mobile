import React, {useState, Fragment} from 'react';
import {Keyboard} from 'react-native';

import SelectModal from './SelectModal/SelectModal';
import SelectInput from '../select-input/SelectInput';

const FormSelect = (props) => {
  const {
    name,
    value,
    displayedText,
    onChange,
    options,
    isDisabled,
    placeholder,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    Keyboard.dismiss();
    setModalVisible(true);
  };

  const closeModal = () => {
    Keyboard.dismiss();
    setModalVisible(false);
  };

  const handleSelect = (selectedOption) => {
    onChange(selectedOption.value, name);
    closeModal();
  };

  let text = '';
  /**
   * displayedText is for displaying value directly without finding in the options
   * useful when view only or when value is not in the options
   */
  if (displayedText) {
    text = displayedText;
  } else {
    const selectedOption = options.find((item) => item.value === value);
    if (selectedOption) {
      text = selectedOption.label;
    }
  }

  return (
    <Fragment>
      <SelectInput {...props} onPress={openModal} text={text} />
      {!isDisabled && (
        <SelectModal
          {...props}
          isVisible={modalVisible}
          title={placeholder || ''}
          onSelect={handleSelect}
          onCancel={closeModal}
        />
      )}
    </Fragment>
  );
};

FormSelect.defaultProps = {
  options: [],
};

export default FormSelect;
