import vine from "@vinejs/vine";

const schema = vine.object({
    email : vine.string(),
    password : vine.string(),
})
const authValidate = vine.compile(schema)
export default authValidate