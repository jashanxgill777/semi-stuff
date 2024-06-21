const {
  Client,
  Interaction,
  MessageButton,
} = require(process.env.ASTRO);

const LOGIN = process.env['LOGIN']

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send("I'm Alive :)")
});
app.listen(8800, () => {
  console.log('The Project is Ready!');
});



const client = new Client({
  checkUpdate: false,
}); // All partials are loaded automatically



client.on("ready", async (message) => {
  console.log(`Logged into ${client.user.username}`);
  client.user.setStatus(process.env.STATUS)
});






client.on("messageCreate", async (message) => {


    if (
    message.guild.id == 1245615678380048425 &&
    message.author.id == 716390085896962058
    ) {
    const run = async (id) => {
      await message.clickButton(id);
      }
    
    if (
       (message.content?.includes("Are you sure"))
    ) {
   let custom_id = message.components[0]?.components[0]?.customId;
      if (custom_id != undefined) {
        await message.clickButton(custom_id);
      }
    } else if (
      (message.embeds[0]?.title?.includes("Are you sure")&&
        message.embeds[0]?.title?.includes("confirm"))
    ) {
      let custom_id = message.components[0]?.components[0]?.customId;
      if (custom_id != undefined) {
        await message.clickButton(custom_id);
      }
    }



  }

});

client.login(process.env.LOGIN);
