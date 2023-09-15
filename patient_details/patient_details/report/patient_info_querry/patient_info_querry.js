// Copyright (c) 2023, gk and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Patient Info Querry"] = {
	"filters": [
		{
			"fieldname": "name1",
			"label" : __("Name Of Patient "),
			"fieldtype": "Data", 
			"options": ""  

		},
		{
			"fieldname": "mrd_no",
			"label" : __("MRD No"),
			"fieldtype": "Data", 
			"options": ""  

		},
		{
			"fieldname": "date_of_admission",
			"label" : __("Date of Admission"),
			"fieldtype": "Date", 
			"options": ""  

		}


		

	]
};
