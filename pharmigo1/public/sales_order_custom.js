frappe.ui.form.on("Sales Order", {
    before_save: function (frm) {
        let grand_total = flt(frm.doc.grand_total);
        let current_outstanding = flt(frm.doc.current_outstanding);
        frm.set_value('p_total', grand_total + current_outstanding);
    },
    on_submit:function (){
        let grand_total = flt(frm.doc.grand_total);
        let current_outstanding = flt(frm.doc.current_outstanding);
        frm.set_value('p_total', grand_total + current_outstanding);
    }
})