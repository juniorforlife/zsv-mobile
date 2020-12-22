import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Text from './Text/Text';
import VectorIcon from '../vector-icon';

const SelectInput = ({
  onPress,
  isDisabled,
  placeholder,
  label,
  text,
  iconProps,
  error,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        !!error && styles.containerError,
        isDisabled && styles.containerDisable,
      ]}
      onPress={onPress}>
      <View style={styles.topContainer}>
        {typeof iconProps === 'object' && (
          <View style={[styles.iconContainer]}>
            <VectorIcon {...iconProps} />
          </View>
        )}

        <View style={styles.contentContainer}>
          {!!label && <Text style={styles.label}>{label}</Text>}
          {!!text && <Text style={styles.value}>{text}</Text>}
          {!text && <Text style={styles.placeholder}>{placeholder}</Text>}
        </View>
        <View style={styles.rightIconContainer}>
          <VectorIcon name="chevron-right" color={'grey'} />
        </View>
      </View>
      {!!error && <Text>{error}</Text>}
    </TouchableOpacity>
  );
};

SelectInput.defaultProps = {
  placeholder: 'placeholder...',
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  containerError: {
    backgroundColor: 'red',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  containerDisable: {
    backgroundColor: '#bdbdbd',
  },
  topContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: 'black',
  },
  placeholder: {
    fontSize: 14,
    color: 'grey',
  },
  rightIconContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 4,
  },
});

export default SelectInput;
