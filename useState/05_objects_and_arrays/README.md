<p>On the topic of <code>arrays</code> and <code>objects</code>, here are some tips on how to update pieces of state that hold these complex structures.</p>
<p>First, notice we can simply set an object in state. Second, we will never try to directly mutate the object</p>
<p><code>form.email = e.target.value</code>? NEVER!</p>
<p>Instead, we are using some tricks under our sleeve:</p>
<ul>
<li>We are providing every input field and the textarea with a <code>name</code> attribute and passing an <code>arrays</code>&nbsp;handler</li>
<li>From within the handler, we retrieve the target name and value</li>
<li>We set the new value of form with the spread operator</li>
<li>Using [ ] we can dynamically set properties! e.g. if <code>e.target.name</code> is <code>email</code> it'd look like <code>{...form, ['email']: e.target.value}</code></li>
</ul>
<p>And there you go. Same principle can be applied to arrays.</p>