trigger AccountTrigger on Account (before Insert, after Insert, before Update, after Update, before Delete, after Delete, after Undelete) {


    if(Trigger.isDelete && Trigger.isBefore)
    {
        AccountClass.insertAccountArch(Trigger.old);
    }
}