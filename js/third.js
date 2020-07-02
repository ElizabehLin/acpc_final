$(document).ready(function(){
    // Your web app's Firebase configuration
    firebase.initializeApp({
    apiKey: "AIzaSyAPc96gGJ9zwCjrPXGcE2CAA-iDMcCEOpE",
    authDomain: "acpc-32197.firebaseapp.com",
    databaseURL: "https://acpc-32197.firebaseio.com",
    projectId: "acpc-32197",
    storageBucket: "acpc-32197.appspot.com",
    messagingSenderId: "757341893892",
    appId: "1:757341893892:web:c4b22d24e6a9b09d368c51",
    measurementId: "G-H512BS94K6"
    });
    
    let db = firebase.firestore(); 
    
    let collection_status = db.collection( "collection" ). doc ( "Jay" );
    let test=false;
    // db.collection("collection").doc("Jay")
    // .onSnapshot(function(doc) {
    //     console.log("Current data: ",doc . id , " => " , doc . data ());
    //     if (doc . data ()=="added"){
    //         $('#collection').addClass('add_collect');
    //         console . log ( "add success");
    //         test=true;
    //     }
    //     else{
    //         $('#collection').removeClass('add_collect');
    //         console . log ( "remove success");
    //         test=false;
    //     }
    // });

    var docRef = db.collection("collection").doc("Jay");
    docRef.get().then(function(doc) {
        console.log("Current data: ",doc . id , " => " , doc . data ());
        if (docRef =="removed"){
            
            $('#collection').removeClass('add_collect');
            console . log ( "remove success");
            test=true;
        }
        else{
            $('#collection').addClass('add_collect');
            console . log ( "add success");
            test=false;
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

//true
    // db . collection ( "collection" ) . get ()
    // . then ( function ( querySnapshot ) { 
        
    //     $('#collection').addClass('add_collect')
        
    //     querySnapshot . forEach ( function ( doc ) { 

    //         doc.data() is never undefined for query doc snapshots
    //         console . log ( doc . id , " => " , doc . data ()); 
    //         // if (doc . data ()=="added"){
    //         //     $('#collection').addClass('add_collect');
    //         //     console . log ( "add acusses");
    //         // }
    //         // else{
    //         //     $('#collection').removeClass('add_collect');
    //         //     console . log ( "remove acusses");
    //         // }
    //     });
    //     test=true;
    // })
    // . catch ( function ( error ) { 
    //     console . log ( "Error getting documents: " , error );
    // });
    
//false
    // db . collection ( "collection" ) .where("collect_value","==","false"). get ()
    // . then ( function ( querySnapshot ) { 
    //      $('#collection').removeClass('add_collect')
        
    //     querySnapshot . forEach ( function ( doc ) { 
    //         // doc.data() is never undefined for query doc snapshots
    //         console . log ( doc . id , " => " , doc . data ()); 
    //     });
    //     test=false;
    // })
    // . catch ( function ( error ) { 
    //     console . log ( "Error getting documents: " , error );
    // });
//click collection
    $(function(){ $('#collection').click(function(){
        if(test==false){
            $(this).addClass('add_collect')
            test=true
            // Add a new document in collection "cities"
            db.collection( "collection" ). doc ( "Jay" ). set ({ 
            collect_value : "added"}) . then ( function () {console . log ( "Document successfully written!add" ); }) .catch ( function ( error ) {     console 
            . error ( "Error writing document: " , error ); });
        }
        else{
            $(this).removeClass('add_collect')
            test=false
            // Add a new document in collection "cities"
            db.collection( "collection" ). doc ( "Jay" ). set ({ 
            collect_value : "removed"}) . then ( function () {console . log ( "Document successfully written!remove" ); }) .catch ( function ( error ) {     console 
            . error ( "Error writing document: " , error ); });
        }

        });
    });
});