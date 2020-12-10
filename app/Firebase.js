import firebase from "firebase";

class Firebase {
  uid = "";
  messagesRef = null;
  // initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyCCX0SAXA78YjNdyl1LS88ZgvXw-0Gf_2Q",
      authDomain: "asankisan-d3d74.firebaseapp.com",
      databaseURL: "https://asankisan-d3d74.firebaseio.com",
      projectId: "asankisan-d3d74",
      storageBucket: "asankisan-d3d74.appspot.com",
      messagingSenderId: "755521933829",
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }

  loadMessagesIslamabad(callback) {
    this.messagesRef = firebase.database().ref("Islamabad_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  loadMessagesLahore(callback) {
    this.messagesRef = firebase.database().ref("Lahore_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  loadMessagesKarachi(callback) {
    this.messagesRef = firebase.database().ref("Karachi_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  loadMessagesRawalpindi(callback) {
    this.messagesRef = firebase.database().ref("Rawalpindi_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  loadMessagesMultan(callback) {
    this.messagesRef = firebase.database().ref("Multan_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  loadMessagesOverAll(callback) {
    this.messagesRef = firebase.database().ref("OverAll_Group");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Firebase();
export const db = firebase.database();
