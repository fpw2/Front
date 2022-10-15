import { useDispatch, useSelector } from "react-redux";
import { cancel, edit, save } from "../../feature/auth/auth.slice";
import Button from "../ui-kit/Button";

export default function EditProfile() {
  const dispatch = useDispatch();
  const { userInfo, editing } = useSelector((state) => state.user);
  const firstName = userInfo.firstName;
  const lastName = userInfo.lastName;

  return (
    <div className="header">
      <div>
        <h1>
          <p>Welcome back</p>
          {editing ? (
            <div className="user-edit">
              <div className="input-champs">
                <input type="text" placeholder={firstName} />
                <input type="text" placeholder={lastName} />
              </div>
              <div className="btn-save-cancel">
                <Button
                  edit
                  onClick={() => dispatch(save())}
                  className="edit-button"
                >
                  Save
                </Button>
                <Button
                  edit
                  onClick={() => dispatch(cancel())}
                  className="edit-button"
                >
                  Cancel
                </Button>
              </div>
            </div>
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
