import AsyncStorage from "@react-native-async-storage/async-storage";

// certo seria storeObjectData
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log("Data successfully saved");
  } catch (error) {
    console.log("Error saving data: ", error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log("Error retrieving data: ", error);
  }
};
