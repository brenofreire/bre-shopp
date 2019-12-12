import { observable, action } from 'mobx';

class GeneralStore {
    @observable public productsOnCart: number = 0;
    @observable public cartValue: number = 0;

    @action
    public setCartInfo(price: number){
        this.productsOnCart += 1;
        this.cartValue += price; 
    }
}

export default GeneralStore;