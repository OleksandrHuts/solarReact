import UserForm from "./UserForm";

export default function MainBanner() {
    const userObj = {
        user_name: 'alex',
        user_phone: '123123',
        user_email: 'mail@mail',
        user_message: 'Oleg whre are u?',
        user_country: 'ukraine'
    }
    return (
        <div className="main_banner" >
            <div className="container">
                <div className="flex_row main_banner_row">
                    <div className="text_col">
                        <h1>сонячні електростанції</h1>
                        <h2>ПІДКЛЮЧЕННЯ «ЗЕЛЕНОГО» ТАРИФу</h2>
                        <h3></h3>
                        <div className="banner_btns">
                            <a href="#" className="banner_btn one">Послуга під ключ</a>
                            <a href="#" className="banner_btn two">багаторічний досвід</a>
                            <a href="#" className="banner_btn three">задоволені клієнти</a>
                        </div>
                    </div>
                    <div className="form_col">
                        <UserForm {...{userObj}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}