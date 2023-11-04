export default function MainBanner() {
    return (
        <div className="main_banner">
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
                        <form className="callback callback_banner clearfix">
                            <div className="form_content_wrapper">
                                <h3 className="form_header">Безкоштовний розрахунок</h3>
                                <p className="form_text">
                                    ЗАПОВНИ ФОРМУ ТА ОТРИМАЙ КОМПЛЕКСНУ КОНСУЛЬТАЦІЮ
                                </p>
                                <div className="success">
                                    <span className="close_succes"></span>
                                    <span className="success_text text-center">Ваше повідомлення надіслано, <br/>ми скоро Вам
                                        зателефонуємо</span>
                                </div>
                                <input type="hidden" name="project_name" value="KS Solar - Зелёный тариф" />
                                <input type="hidden" name="admin_email" value="info@kssolar.com.ua" />
                                Admin email
                                <input type="hidden" name="form_subject" value="KS Solar - Зелёный тариф" />
                                <input type="hidden" name="page" value="KS Solar - Зелёный тариф" />
                                <div className="input_wrapper clearfix">
                                    <div className="input_box">
                                        <input className="reset" type="text" name="user_name" id="user_name" placeholder="Ім’я" required />
                                    </div>
                                    <div className="input_box">
                                        <input className="reset" type="tel" name="user_phone" id="user_phone" placeholder="Номер телефону"
                                            required />
                                    </div>
                                    {/* <div className="input_box">
                                        <div className="custom_select_wrapper">
                                            <input type="hidden" name="variant" id="variant" />
                                                <button type="button" className="custom_list_trigger" id="custom_list_trigger">
                                                    <span className="label">Select variant</span> <span className="arrow">➤</span></button>
                                                <ul className="custom_list" id="custom_list">
                                                    <li className="custom_list_item" data-value="1">one</li>
                                                    <li className="custom_list_item" data-value="2">two</li>
                                                    <li className="custom_list_item" data-value="3">three</li>
                                                    <li className="custom_list_item" data-value="4">four</li>
                                                </ul>
                                        </div>
                                    </div> */}
                                    <p className="form_text"></p>
                                </div>
                            </div>
                            <div className="fg1">
                                <button type="submit" className="sub_button btn">Надіслати</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}