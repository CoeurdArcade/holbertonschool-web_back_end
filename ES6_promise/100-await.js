import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  Promise.all([
    await uploadPhoto(),
    await createUser(),
  ])
    .then((results) => ({
      photo: results[0],
	    user: results[1],
    }))
    .catch((err) => ({
      photo: null,
		 user: null,
    }));
}
