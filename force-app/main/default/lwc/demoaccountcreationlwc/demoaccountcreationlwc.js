import { LightningElement, track, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/createNewAccountController.getAccountDetails';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
import getAccountDetailsByName from '@salesforce/apex/createNewAccountController.getAccountDetailsByName';


const columns = [
    {
        type: 'checkbox',
        fieldName: 'q1',
        label: 'Select',
        typeAttributes: { isChecked: { fieldName: 'isChecked' }, isRowEditable: { fieldName: 'isRowEditable' }, columnName: 'Select', userId: { fieldName: 'Name'}
                         ,rowId: {fieldName: 'id'} },
		cellAttributes: { class: { fieldName: 'disabledClass' }}
    },
    {label: 'Account Type', type: 'combobox'},
    {label: 'Account name', fieldName: 'Name', type: 'text'},
    {label: 'Phone', fieldName: 'Phone', type: 'phone'},
    {label: 'Billing Address', fieldName: 'BillingAddress', type: 'email'},
    {label: 'Website', fieldName: 'Website', type: 'url'},
    {label: 'Account Number', fieldName: 'AccountNumber', type: 'text'},
    {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency',
    cellAttributes:{iconName: {fieldName: 'annualRevenueIcon'},
                    iconLabel: {fieldName: 'annualRevenueIconLabel' },
                    iconPosition: 'left',
                    iconAlternative: 'Annual Revenue Icon',
                    class:{ fieldName: 'annualRevenueClass'}
}
},
    {label: 'Rating', fieldName: 'Rating', type: 'text'}
];



export default class Demoaccountcreationlwc extends LightningElement {
 // @track data = data;
  @track columns = columns;
  @track accountName;
  @track phone;
  @track stateName;
  @track cityName;
  @track zipcode;
  @track countryName;
  @track showAccountSearch=true;
  @track showAccountCreate=false;
  @track accountsData=[];

  @wire(getAccountDetailsByName,{accountName : '$accountName' })
  DataReturnedFromApexClassReactiveProperty({error,data}){
    if(data){
      console.log(data);
    }
    else if(error){
      console.log(error);
    }
  }
 connectedCallback(){
     var dataTableStyle = document.createElement('style');
     dataTableStyle.innerHTML=`
                                 .redRow{
                                     background-color:red
                                 }
                                 .greenRow{
                                     background-color:green
                                 }
                               `;
       document.head.appendChild(dataTableStyle);                     
 }
 handlecheckboxchange(event){
    console.log(event);
}
 handleInputOnChange(event){
      if(event.target.name==='accountName'){
          this.accountName = event.target.value;
      }
      else if(event.target.name ==='phone'){
          this.phone = event.target.value;
      }
  }
  handleStateOnChange(event){
      this.stateName = event.target.value;
  }
  handleCityOnChange(event){
      this.cityName = event.target.value;
  }
  handleZipCodeOnChange(event){
      this.zipcode = event.target.value;
  }
  handleCountryOnChange(event){
      this.countryName = event.target.value;
  }
  handleShowAccountCreationForm(event){
      this.showAccountCreate=true;
      this.showAccountSearch=false;
  }
  handlePreviousFromCreateStep(event){
      this.showAccountCreate = false;
      this.showAccountSearch = true;
      //console.log(event.detail);
      this.accountName = event.detail.accountName;
      this.phone =event.detail.phone;
      this.stateName=event.detail.stateName;
      this.cityName=event.detail.cityName;
      this.zipcode=event.detail.zipcode;
      this.countryName=event.detail.countryName;

  }
  handleHideCreateNewAccount(event){
    this.showAccountCreate = event.detail;
}
handlehidecreateaccountdetails(event){
    this.showAccountCreate = event.detail;
}
  validateInputfields(){
      const isInputCorrect = [
          ...this.template.querySelectorAll("lightning-input"),
      ].reduce((validSoFar, inputField) => {
          if(!inputField.checkValidity()){
              if(inputField.name == 'accountName'){
                  inputField.setCustomValidity('Please Enter valid name');
              }
              else if(inputField.name == 'phone'){
                  inputField.setCustomValidity('please enter valid phone');
              }
          }
          inputField.reportValidity();
          return validSoFar && inputField.checkValidity();
      }, true);

      if (isInputCorrect===false) {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: "Error",
                  message: "Input the reqired fields",
                  variant: "error",
              })
          );
          return;
      }
  }
  getAccountsData(event){
    this.validateInputfields();
    getAccountDetails({accountName: this.accountName, phone: this.phone, stateName: this.stateName, 
                        cityName: this.cityName, zipcode: this.zipcode, countryName:this.countryName,website:this.website,
                        accountNumber:this.accountNumber,annualRevenue:this.annualRevenue,rating:this.rating
                    })
                    .then(result=>{
                        console.log(result);
                        this.accountsData = [];
                        result.forEach(x=>{
                            var data = {
                                id: x.Id,
                                Name: x.Name,
                                Phone: x.Phone,
                                BillingAddress:(x.BillingAddress==null || x.BillingAddress==undefined)?'': x.BillingAddress.street + ' ' + x.BillingAddress.city + ' ' + x.BillingAddress.state + ' ' + x.BillingAddress.postalCode + ' ' + x.BillingAddress.country,
                                Website: x.Website,
                                isChecked: 'true',
                                isRowEditable: 'true',
                                disabledClass: '',
                                    AccountNumber: x.AccountNumber,
                                    AnnualRevenue: x.AnnualRevenue,
                                    annualRevenueClass: x.AnnualRevenue > 50000? 'greenRow':'redRow',
                                    annualRevenueIcon: x.AnnualRevenue > 50000? 'utility:arrowup':'utility:arrowdown',
                                    annualRevenueIconLabel: x.AnnualRevenue > 50000? 'up':'down',
                                    Rating: x.Rating


                            }
                            this.accountsData.push(data);
                        });
                        this.accountsData = [... this.accountsData];
                    })
                    .catch(error=>{
                        console.log(error);
                    })
    console.log('I got called first');
}

    gridColumns = [{
        type: 'text',
        fieldName: 'accountName',
        initialWidth: 310,
        label: 'Name',
    },
    {
        type: 'text',
        fieldName: 'phone',
        initialWidth: 140,
        label: 'Phone Number',
    }, {
        type: 'text',
        fieldName: 'primaryCommodity',
        initialWidth: 170,
        label: 'Primary Commodity',
    }, {
        type: 'text',
        fieldName: 'accountType',
        initialWidth: 140,
        label: 'Account Type',
    },
    {
        type: 'text',
        fieldName: 'billingAddress',
        label: 'Billing Address',
    },
   {
        type:'email',
        fieldName:'website',
        label:'Website',


    },
    {
        type:'number',
        fieldName:'accountNumber',
        label:'Account Number',

    },
    {
        type:'number',
        fieldName:'annualRevenue',
        label:'Annual Revenue',
    },
    {
        type:'text',
        fieldName:'rating',
        label:'Rating',

    },
    {
        type: 'button',
        fieldName: 'Action',
        initialWidth: 140,
        label: 'Action',
        typeAttributes: {
            iconName: '',
            name: 'moreInfo',
            title: 'More Info',
            label: 'More Info',
            fieldName: 'MoreInfo',
            variant: 'brand',
            disabled: false,
            class: {
                fieldName: 'isbutton'
            },
        },
    },

];
}