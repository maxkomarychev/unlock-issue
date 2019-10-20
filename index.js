const core = require("@actions/core");
const github = require("@actions/github");

core.warning("This action is deprecated in favor of https://github.com/maxkomarychev/oction-unlock-issue")

function parse_array(input_name) {
  const input_value = core.getInput(input_name)
  if (input_value === "") {
    return undefined; 
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

function parse_boolean(input_name) {
  const input_value = core.getInput(input_name)
  return input_value === "true"
}

function default_parse(input_name) {
  const input_value = core.getInput(input_name)
  return input_value || undefined
}

try {
  const token = default_parse("token");
  const issue_number = default_parse("issue_number");
  const client = new github.GitHub(token);
  const context = github.context;
  client.issues.unlock({
    ...context.repo,
      token,
      issue_number,
    headers: {
      "Accept": "application/vnd.github.flash-preview+json, application/vnd.github.ant-man-preview+json",
    }
  }).then(response => {
    console.log('response', response)
  })
  .catch(error => {
    console.log("error 1", error);
    core.setFailed(error.message);
  });
} catch (error) {
  console.log("error 2", error);
  core.setFailed(error.message);
}
