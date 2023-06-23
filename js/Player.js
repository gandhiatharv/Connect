class Player {
  constructor(){

  }
  getMessage1(){
    database.ref('CM1').on("value", (data) => {
       
      CM1 = data.val();
    });
  }
  getMessage2(){
    database.ref('CM2').on("value", (data) => {
       
      CM2= data.val();
    });
  }
  getMessage3(){
    database.ref('CM3').on("value", (data) => {
       
      CM3 = data.val();
    });
  }
  getMessage4(){
    database.ref('CM4').on("value", (data) => {
       
      CM4 = data.val();
    });
  }
  getMessage5(){
    database.ref('CM5').on("value", (data) => {
       
      CM5 = data.val();
    });
  }
  getMessage6(){
    database.ref('CM6').on("value", (data) => {
       
      CM6 = data.val();
    });
  }

  getMessage7(){
    database.ref('CM7').on("value", (data) => {
      CM7 = data.val();
    });
  }
  
  getMessage8(){
    database.ref('CM8').on("value", (data) => {
      CM8 = data.val();
    });
  }
  
  getMessage9(){
    database.ref('CM9').on("value", (data) => {
      CM9 = data.val();
    });
  }
  
  getMessage10(){
    database.ref('CM10').on("value", (data) => {
      CM10 = data.val();
    });
  }
  
  getMessage11(){
    database.ref('CM11').on("value", (data) => {
      CM11 = data.val();
    });
  }
  
  getMessage12(){
    database.ref('CM12').on("value", (data) => {
      CM12 = data.val();
    });
  }
  
  getMessage13(){
    database.ref('CM13').on("value", (data) => {
      CM13 = data.val();
    });
  }
  
  getMessage14(){
    database.ref('CM14').on("value", (data) => {
      CM14 = data.val();
    });
  }
  
  getMessage15(){
    database.ref('CM15').on("value", (data) => {
      CM15 = data.val();
    });
  }
  
  getReported(){
    database.ref('reported').on("value", (data) => {
       
      reported = data.val();
    });
  }

  static updateReported(reportedval){
    database.ref('/').update({
      reported:reportedval
    });
  }
  static updateMessage1(chatmessage){
    database.ref('/').update({
      CM1:"."
    });
    database.ref('/').update({
      CM1:chatmessage
    });



  }
  static updateMessage2(chatmessage){
    database.ref('/').update({
      CM2:"."
    });
    database.ref('/').update({
      CM2:chatmessage
    });


  }
  static updateMessage3(chatmessage){
    database.ref('/').update({
      CM3:"."
    });
    database.ref('/').update({
      CM3:chatmessage
    });
  }
  static updateMessage4(chatmessage){
    database.ref('/').update({
      CM4:"."
    });
    database.ref('/').update({
      CM4:chatmessage
    });




  }
  static updateMessage5(chatmessage){
    database.ref('/').update({
      CM5:"."
    });
    database.ref('/').update({
      CM5:chatmessage
    });




  }
  static updateMessage6(chatmessage){
    database.ref('/').update({
      CM6:"."
    });
    database.ref('/').update({
      CM6:chatmessage
    });


  }

  static updateMessage7(chatmessage){
    database.ref('/').update({
      CM7: "."
    });
    database.ref('/').update({
      CM7: chatmessage
    });
  }
  
  static updateMessage8(chatmessage){
    database.ref('/').update({
      CM8: "."
    });
    database.ref('/').update({
      CM8: chatmessage
    });
  }
  
  static updateMessage9(chatmessage){
    database.ref('/').update({
      CM9: "."
    });
    database.ref('/').update({
      CM9: chatmessage
    });
  }
  
  static updateMessage10(chatmessage){
    database.ref('/').update({
      CM10: "."
    });
    database.ref('/').update({
      CM10: chatmessage
    });
  }
  
  static updateMessage11(chatmessage){
    database.ref('/').update({
      CM11: "."
    });
    database.ref('/').update({
      CM11: chatmessage
    });
  }
  
  static updateMessage12(chatmessage){
    database.ref('/').update({
      CM12: "."
    });
    database.ref('/').update({
      CM12: chatmessage
    });
  }
  
  static updateMessage13(chatmessage){
    database.ref('/').update({
      CM13: "."
    });
    database.ref('/').update({
      CM13: chatmessage
    });
  }
  
  static updateMessage14(chatmessage){
    database.ref('/').update({
      CM14: "."
    });
    database.ref('/').update({
      CM14: chatmessage
    });
  }
  
  static updateMessage15(chatmessage){
    database.ref('/').update({
      CM15: "."
    });
    database.ref('/').update({
      CM15: chatmessage
    });
  }
  
}
