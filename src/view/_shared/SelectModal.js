import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import Text from './Text';
import VectorIcon from './VectorIcon';

const SelectModal = ({
  isVisible,
  options,
  title,
  onSelect,
  onCancel,
  optionRenderer,
  searchFunction,
  searchPlaceholder,
}) => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption);
  };

  const handleSearch = (text) => {
    let result = [];
    if (text) {
      if (typeof searchFunction === 'function') {
        result = searchFunction(options);
      } else {
        result = options.filter((item) => {
          return item.label.toLowerCase().includes(text.toLowerCase());
        });
      }
    } else {
      result = options;
    }
    setTimeout(() => setSearchResult(result), 350);
  };

  const handleCloseModal = () => {
    setSearchResult(null);
    onCancel();
  };

  const renderOption = ({item}) => {
    let content = null;
    if (typeof optionRenderer === 'function') {
      content = optionRenderer(item);
    } else {
      content = (
        <View style={styles.option}>
          <Text style={styles.optionTxt}>{item.label}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => handleSelect(item)}>
        {content}
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item, index) =>
    item.value ? item.value.toString() : index.toString();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleCloseModal}
      backdropTransitionOutTiming={0}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      style={styles.modal}>
      <View style={styles.container}>
        {!!title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.searchContainer}>
          <VectorIcon
            name="search"
            size={14}
            color={'grey'}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            placeholder={searchPlaceholder || 'Search...'}
            placeholderTextColor="#9297A3"
            onChangeText={handleSearch}
          />
        </View>
        {options.length ? (
          <FlatList
            keyboardShouldPersistTaps="always"
            data={searchResult || options}
            renderItem={renderOption}
            keyExtractor={keyExtractor}
          />
        ) : (
          <Text style={styles.noData}>No data</Text>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    top: '5%',
    flex: 0.9,
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: '5%',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  searchIcon: {
    marginRight: '5%',
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 14,
  },
  option: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  optionTxt: {
    fontSize: 14,
  },
  noData: {
    color: 'grey',
    alignSelf: 'center',
  },
});

export default SelectModal;
