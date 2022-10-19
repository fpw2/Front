import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { cancel, edit } from "../../feature/auth/auth.slice";
import Button from "../ui-kit/Button";
import { userEditProfile } from "../../feature/auth/profilService";

/**
 * Display Profile's edit
 * @returns html
 */
export default function EditProfile() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm(); // register = {...register} , handleSubmit on form
  const { userInfo, editing } = useSelector((state) => state.user);
  const firstName = userInfo.firstName;
  const lastName = userInfo.lastName;

  /**
   * Calls for action userEditProfile with data form
   * @param {object} firstName, lastName
   */
  const submitEdit = (data) => {
    console.log(data);
    const firstName =
      data.firstName.substring(0, 1).toUpperCase() +
      data.firstName.substring(1).toLowerCase();
    const lastName =
      data.lastName.substring(0, 1).toUpperCase() +
      data.lastName.substring(1).toLowerCase();
    dispatch(userEditProfile({ firstName, lastName }));
  };

  return (
    <div className="header">
      <div>
        <h1>
          <p>Welcome back</p>
          {editing ? (
            <form onSubmit={handleSubmit(submitEdit)} className="user-edit">
              <div className="wrapper">
                <div>
                    <input
                      type="text"
                      placeholder={firstName}
                      id="firstName"
                      {...register("firstName")}
                      pattern="[A-zÀ-ú\s]+"
                      required
                    />
                    <input
                      type="text"
                      placeholder={lastName}
                      id="lastName"
                      {...register("lastName")}
                      pattern="[A-zÀ-ú\s]+"
                      required
                    />            
                </div>
                <div>
                  <Button edit type="submit" className="edit-button btn-save">
                    Save
                  </Button>
                  <Button
                    edit
                    onClick={() => dispatch(cancel())}
                    className="edit-button btn-cancel"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <div>
              <p>
                {firstName} {lastName} !
              </p>
              <Button onClick={() => dispatch(edit())}>Edit Name</Button>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
}
