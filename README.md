# Advent of Code Exercises - 2021

https://adventofcode.com/2021

npm run prompt

npm run test

## Using Git

There is a helper script in `~/.local/bin/` called `sgit`. It allows you to
work with git with your own name/email even though this environment only has a
single shared git config.

### One-time setup

You need to generate an [SSH](https://en.wikipedia.org/wiki/Secure_Shell) key that you will use to authenticate to GitHub.

```bash
aoc-owner-46acdf9:~/environment $ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/ec2-user/.ssh/id_rsa): /home/ec2-user/.ssh/id_rsa_your-github-id
```

You will be prompted for a password. It must be at least 5 characters.

Next you need to add your key to GitHub. First, copy it to your clipboard:

```bash
cat /home/ec2-user/.ssh/id_rsa_your-github-id.public
```

**Make sure you `cat` the file that ends with `.pub` and not the (private) key with no file extension!**

Next, go to [https://github.com/settings/keys](https://github.com/settings/keys) and click "New SSH key".
You can name the key "Advent of Code Cloud9" and paste your public key into the "Key" box.

Now you're all set!

### Usage

**Option 1:** You can specify your github ID with every command:

```bash
sgit [your-github-id] commit -m "My commit message"
sgit [your-github-id] push
```

Or you can use an environment variable once per session:

```bash
export GITHUB_USER="your-github-id"
sgit commit -m "My commit message"
sgit push
```