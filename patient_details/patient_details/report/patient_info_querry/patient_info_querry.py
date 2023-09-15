# Copyright (c) 2023, gk and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	if not filters : filters = {} 
	columns, data = [], []

	columns = get_columns()
	cs_data = get_cs_data(filters)

	if not cs_data : 
		frappe.msgprint(('No Records Found')) 
		return columns , cs_data 
	

	data  = [] 
	for d in cs_data : 
		row = frappe._dict({
			'name1'  : d.name1 ,
			'mrd_no' : d.mrd_no , 
			'Date of Admission' : d.data_of_admission

		})
		data.append(row)
	chart = get_chart(columns,row)

	return columns, data , None , chart 



def get_chart(columns, data): 
	return{
		"data": {
			"labels": ["red", "blue"], 
			"datasets":[{"name" : "Test Chart", "values": [0.3, 0.7]} ] 
		},
		"type":"pie"

	}
	
		  
	  

	 



def get_columns() : 
	return [
		{
			'fieldname' : 'name1', 
			'label': ("Name"),
			'fieldtype':'Data', 
			'width':120

		},

		{
			'fieldname': 'mrd_no', 
			'label' : ("MRD Number") , 
			'fieldtype': 'Data' ,
			'width': 120

		},
		{
			'fieldname': 'date_of_admission', 
			'label' : ("Date Of Time") , 
			'fieldtype': 'Date' ,
			'width': 120

		}
		



	]


def get_cs_data(filters): 
	conditions = get_conditions(filters)
	data  = frappe.db.get_all(
		doctype = 'Patient Information',
		fields =["name1", "mrd_no" , "date_of_admission"],
		filters = conditions , 
		order_by =  "name1 desc"
		  )
	return data 


def get_conditions(filters) :
	conditions = {}
	for key, value in filters.items()  : 
		if filters.get(key) : 
			conditions[key] = value 
	return conditions  

