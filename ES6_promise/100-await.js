import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj = null;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    obj = { photo, user };
  } catch (err) {
    obj = { photo: null, user: null };
  }
  return obj;
}
