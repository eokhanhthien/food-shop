
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    // flex : 1,

  },
  sidebar_top: {
    backgroundColor: 'white',
    width: "100%",
    // height : 40,
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  input: {
    height: 40,
    // marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ccc",
    width: '60%',
  },
  icon_cart: {
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    marginLeft: 6,
  },
  icon_cart_left: {
    height: '100%',
    width: '80%',
    marginRight: 6,
  },
  info_user: {
    backgroundColor: 'white',
    width: "100%",
    // height : 40,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '20%',
    // height : 40,
    // backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    aspectRatio: 1,
    marginRight: 10

  },
  info: {
    width: '50%',
    // backgroundColor: 'blue',

  },
  info_text: {
    fontSize: 16,
    marginBottom: 4
  },
  logout: {
    width: '30%',
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  button: {

    width: '100%',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button_text: {
    color: 'white'
  },
  container_header_right: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    marginRight: 6,
    justifyContent: 'center'
  },
  container_header_left: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
    // marginRight: 6,
    // backgroundColor: 'blue'
  },
  container_header_mid: {
    width: '60%',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  logo_text: {
    fontSize: 20,
    fontWeight: "700"
  },
  icon: {
    fontSize: 30,
    marginHorizontal: 3
  }
});
