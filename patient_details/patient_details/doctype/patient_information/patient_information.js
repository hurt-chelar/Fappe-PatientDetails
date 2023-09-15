// Copyright (c) 2023, gk and contributors
// For license information, please see license.txt


let document = 'Patient Information'

frappe.ui.form.on(document, {
    
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



 frappe.ui.form.on(document, {
    
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



 frappe.ui.form.on(document,{
	'immunosupressive_condition': function(frm){
		let x = frm.doc.immunosupressive_condition ; 
		console.log(typeof immunosupressive_condition); 
		if(x === "Yes"){
			cur_frm.toggle_display("immunosupressive_condition_details", true)	; 
			cur_frm.toggle_display("immunosupressive_medications", true)	; 
		}
			if(x==="No"){
			cur_frm.toggle_display("immunosupressive_condition_details", false)	; 

			cur_frm.toggle_display("immunosupressive_medications", false) ; 
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

	'analysis_of_body_fluids':function(frm){
		let  x  = frm.doc.analysis_of_body_fluids ; 
		if(x === "Yes"){
			cur_frm.toggle_display("csf_analysis", true)	; 
			cur_frm.toggle_display("ascitic_fluid_analysis", true)	; 

			cur_frm.toggle_display("pleural_fluid_analysis", true)	; 

			cur_frm.toggle_display("synovial_fluid", true)	; 

		} 
		if(x==="No"){
			cur_frm.toggle_display("csf_analysis", false)	; 
			cur_frm.toggle_display("ascitic_fluid_analysis", false)	; 

			cur_frm.toggle_display("pleural_fluid_analysis", false)	; 

			cur_frm.toggle_display("synovial_fluid", false)	;  
		}
	}





 })




 frappe.ui.form.on(document, {
    
	'yees' : function(frm)
	{
		let  x  = frm.doc.yees ; 
		if(x === "Yes"){
			cur_frm.toggle_display("descalation", true)	; 
			cur_frm.toggle_display("escalation", true)	; 
			cur_frm.toggle_display("c_antibiotic_stoppage", true)	; 
			cur_frm.toggle_display("antibiotic_change", true)	; 

			cur_frm.toggle_display("antibiotic_dose_change", true)	; 
			cur_frm.toggle_display("antibiotic_frequency_change", true)	; 
			cur_frm.toggle_display("change_in_route_of_administration", true)	; 
			cur_frm.toggle_display("infusion1", true)	; 

		} 
		if(x==="No"){
			cur_frm.toggle_display("descalation", false)	; 
			cur_frm.toggle_display("escalation", false)	; 
			cur_frm.toggle_display("c_antibiotic_stoppage", false)	; 
			cur_frm.toggle_display("antibiotic_change", false)	; 

			cur_frm.toggle_display("antibiotic_dose_change", false)	; 
			cur_frm.toggle_display("antibiotic_frequency_change", false)	; 
			cur_frm.toggle_display("change_in_route_of_administration", false)	; 
			cur_frm.toggle_display("infusion1", false)	; }
		


		  
	}
 }) 






 
// frappe.ui.form.on(document, {

// 	refresh : function(frm){
// 		frm.doc.checkbox  = [] ; 
// 		console.log(checkbox)
// 		}

// } ) 


frappe.ui.form.on('checkbox', 'idp', function(frm,cdt,cdn) {
	// console.log("started")

    let ch = frm.doc.checkbox
	let x = 0; 
	for(let i =0 ; i <6 ; i++){
		x = x + (ch[i].idp)  
		
	}
	//console.log("Right Colum "  , x);
	frm.set_value('id_physician', x);
	// let x = (ch[0].idp)
	// console.log(typeof (ch[1].idp))
	// console.log(ch[2].idp)
	// console.log(ch[3].idp)
	// console.log(ch[4].idp)
	// console.log(ch[5].idp)


    // var current_row = locals[cdt][cdn]
	// console.log(current_row)


	// console.log("values of cdt and cdn")
	// console.log(cdt, cdn)


    // var current_name = current_row.name

    // if(current_row.idp == 1) {
    //     for (var i = 0; i < ch.length; i++) {
    //     if(ch[i].name != current_name) {
    //         ch[i].primary = 0
    //     }
    //     else{
    //         ch[i].primary = 1
    //     }
    //     }
        
	// 	frm.refresh_field('checkbox');
    // }
	frm.refresh_field('checkbox');
});


frappe.ui.form.on('checkbox', 'pharma_d_intern', function(frm,cdt,cdn) {
	// console.log("started")

    let ch = frm.doc.checkbox
	let x = 0; 
	for(let i =0 ; i <6 ; i++){
		x = x + (ch[i].pharma_d_intern)  
		
	}
	console.log("Right Colum "  , x)
	frm.set_value('pharma_d_inten', x);

	// let x = (ch[0].idp)
	// console.log(typeof (ch[1].idp))
	// console.log(ch[2].idp)
	// console.log(ch[3].idp)
	// console.log(ch[4].idp)
	// console.log(ch[5].idp)


    // var current_row = locals[cdt][cdn]
	// console.log(current_row)


	// console.log("values of cdt and cdn")
	// console.log(cdt, cdn)


    // var current_name = current_row.name

    // if(current_row.idp == 1) {
    //     for (var i = 0; i < ch.length; i++) {
    //     if(ch[i].name != current_name) {
    //         ch[i].primary = 0
    //     }
    //     else{
    //         ch[i].primary = 1
    //     }
    //     }
        
	// 	frm.refresh_field('checkbox');
    // }
	frm.refresh_field('checkbox');
});



