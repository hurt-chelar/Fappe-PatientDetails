// Copyright (c) 2023, gk and contributors
// For license information, please see license.txt

frappe.ui.form.on('at11patentdetails', {
    
	refresh : function(frm)
	 {
		 //console.log(frm) ; 
		 
		frm.doc.checkbox = [] ; 
		// the list values into 
		let entry = frm.add_child("checkbox") ; 
		entry.five = "Right Indication";
		let entry1 = frm.add_child("checkbox") ; 
		entry1.five = "Right Drug" ; 
		let entry2 = frm.add_child("checkbox") ; 
		entry2.five = "Right Loading Dose" ;
		let entry3 = frm.add_child("checkbox") ; 
		entry3.five = "Right Maintenance dose" ;
		let entry4 = frm.add_child("checkbox") ; 
		entry4.five = "Right Frequency" ;
		let entry5 = frm.add_child("checkbox"); 
		entry5.five = "Right Duration" ; 
		frm.get_field("checkbox").grid.cannot_add_rows = true;

		
	
	refresh_field("checkbox"); 
	}
	 	 
 })


frappe.ui.form.on('at11patentdetails', {
    
	weight : function(frm)
	 {
		var hgt = frm.doc.height/100 ;
		//console.log(hgt) ;  
		var wgt = frm.doc.weight ; 
		var ans  = (wgt)  / (hgt*hgt)  ;


		var fans = ans.toFixed(2); 
		frm.set_value("bmi", fans); 


		frm.set_df_property("bmi", "read_only",1 ) ; 
	}


	 	 
 })


//  frappe.ui.form.on('at11patentdetails', {
    
// 	immunosupressive_condition : function(frm)
// 	 {
		
// 		var x= frm.doc.immunosupressive_condition; 
// 		if(frm.doc.immunosupressive_condition = "No"){
// 			console.log("No")
// 			frm.set_df_property('immunosupressive_condition', 'options', ['No', 'Yes']);
// 			frm.set_value("immunosupressive_condition" , "No");



// 		}
// 		frm.refresh_field('immunosupressive_condition');
// 	}


	 	 
//  })


 frappe.ui.form.on('at11patentdetails', {
    
	'ic' : function(frm)
	 {
		
		var x= frm.doc.ic; 
		console.log(typeof x);
		if(x === "Yes"){
			cur_frm.toggle_display("im43", true)	; 
		} 
		if(x==="No"){
			cur_frm.toggle_display("im43", false) ; 
		}

	
	},

	'drug_allergies' : function(frm)
	 {
		
		var x= frm.doc.drug_allergies; 
		console.log(typeof x);
		if(x === "Yes"){
			cur_frm.toggle_display("drug_allergy_details", true)	; 
		} 
		if(x==="No"){
			cur_frm.toggle_display("drug_allergy_details", false) ; 
		}

	
	},

	'drug_allergies' : function(frm)
	 {
		
		var x= frm.doc.drug_allergies; 
		console.log(typeof x);
		if(x === "Yes"){
			cur_frm.toggle_display("drug_allergy_details", true)	; 
		} 
		if(x==="No"){
			cur_frm.toggle_display("drug_allergy_details", false) ; 
		}

	
	}

	







	 	 
 })





