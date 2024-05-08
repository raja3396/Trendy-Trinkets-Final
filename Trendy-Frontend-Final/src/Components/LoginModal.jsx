export default function LoginModal() {
    return (
        <div id="loginModal" className="modal-style dark modal ">
            <div className="modal-dialog modal-login">
                <div className="modal-content">
                    <div className="modal-header p-0">
                        <h4 className="modal-title">Login</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        {/* add action and action method */}
                        <form action="" method="" className="mt-3">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" name="username" placeholder="Enter your username" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="password" className="form-control" name="password" placeholder="Enter password" required="required" autocomplete="on" />
                                </div>
                            </div>
                            <div className="row pl-1 pr-1">
                                <div className="col text-left">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="item_checkbox" name="item_checkbox" value="option1" />
                                        <span className="custom-control-label">&nbsp;Remember Me</span>
                                    </label>
                                </div>
                                <div className="col text-right hint-text pt-0">
                                    <a href="" className="text-danger">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="form-group text-center mt-2 mb-0">
                                <button type="submit" className="btn btn-primary btn-sm">Login</button>

                            </div>
                            <p className="hint-text mt-0">or login with</p>
                            <div className="social-login text-center">
                                <a className=" btn-facebook  text-uppercase" href="redirect/facebook"><i className="fa fa-facebook-square"></i> </a>
                                <a className=" btn-facebook  text-uppercase" href="redirect/google"><i className="fa fa-google"></i></a>
                                <a className=" btn-facebook  text-uppercase" href="redirect/twitter"><i className="fa fa-twitter-square"></i></a>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">Don't have an account? <a href="#registerModal" data-dismiss="modal" data-toggle="modal"> Register</a></div>
                </div>
            </div>
        </div>
    )
}
