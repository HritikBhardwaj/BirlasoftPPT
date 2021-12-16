trigger MerchandiseTri on Merchandise__c (before Insert, after Insert, before Update, after Update, before Delete, after Delete, after Undelete) {

if(Trigger.isDelete && Trigger.isBefore) {

// call the method of the class
MerchandiseClass.insertMerchandiseArch(Trigger.old);
}
}