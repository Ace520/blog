(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{438:function(e,t,a){"use strict";a.r(t);var s=a(12),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/barryvdh/laravel-ide-helper"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"laravel-ide-helper-generator"}},[e._v("Laravel IDE Helper Generator")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://packagist.org/packages/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/barryvdh/laravel-ide-helper.svg?style=flat-square",alt:"Latest Version on Packagist"}}),a("OutboundLink")],1),e._v(" "),a("RouterLink",{attrs:{to:"/posts/LICENSE.html"}},[a("img",{attrs:{src:"https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square",alt:"Software License"}})]),e._v(" "),a("a",{attrs:{href:"https://travis-ci.org/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/barryvdh/laravel-ide-helper/master.svg?style=flat-square",alt:"Build Status"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/barryvdh/laravel-ide-helper",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/barryvdh/laravel-ide-helper.svg?style=flat-square",alt:"Total Downloads"}}),a("OutboundLink")],1)],1),e._v(" "),a("p",[a("strong",[e._v("Complete PHPDocs, directly from the source")])]),e._v(" "),a("p",[e._v("This package generates helper files that enable your IDE to provide accurate autocompletion.\nGeneration is done based on the files in your project, so they are always up-to-date.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#usage"}},[e._v("Usage")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#automatic-phpdoc-generation-for-laravel-facades"}},[e._v("Automatic PHPDoc generation for Laravel Facades")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#automatic-phpdocs-for-models"}},[e._v("Automatic PHPDocs for models")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#automatic-phpdocs-generation-for-laravel-fluent-methods"}},[e._v("Automatic PHPDocs generation for Laravel Fluent methods")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#auto-completion-for-factory-builders"}},[e._v("Auto-completion for factory builders")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#phpstorm-meta-for-container-instances"}},[e._v("PhpStorm Meta for Container instances")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#usage-with-lumen"}},[e._v("Usage with Lumen")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#enabling-facades"}},[e._v("Enabling Facades")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#adding-the-service-provider"}},[e._v("Adding the Service Provider")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#adding-additional-facades"}},[e._v("Adding Additional Facades")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#license"}},[e._v("License")])])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[e._v("Installation")]),e._v(" "),a("p",[e._v("Require this package with composer using the following command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require --dev barryvdh/laravel-ide-helper\n")])])]),a("p",[e._v("If you are using Laravel versions older than 5.5, add the service provider to the "),a("code",[e._v("providers")]),e._v(" array in "),a("code",[e._v("config/app.php")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("Barryvdh\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("LaravelIdeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("IdeHelperServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("In Laravel, instead of adding the service provider in the "),a("code",[e._v("config/app.php")]),e._v(" file,\nyou can add the following code to your "),a("code",[e._v("app/Providers/AppServiceProvider.php")]),e._v(" file, within the "),a("code",[e._v("register()")]),e._v(" method:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Barryvdh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("LaravelIdeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("IdeHelperServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This will allow your application to load the Laravel IDE Helper on non-production environments.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[e._v("Usage")]),e._v(" "),a("p",[a("em",[e._v("Check out "),a("a",{attrs:{href:"https://laracasts.com/series/how-to-be-awesome-in-phpstorm/episodes/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Laracasts video"),a("OutboundLink")],1),e._v(" for a quick introduction/explanation!")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#automatic-phpdoc-generation-for-laravel-facades"}},[a("code",[e._v("php artisan ide-helper:generate")]),e._v(" - PHPDoc generation for Laravel Facades ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#automatic-PHPDocs-for-models"}},[a("code",[e._v("php artisan ide-helper:models")]),e._v(" - PHPDocs for models")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#phpstorm-meta-for-container-instances"}},[a("code",[e._v("php artisan ide-helper:meta")]),e._v(" - PhpStorm Meta file")])])]),e._v(" "),a("p",[e._v("If you don't want to generate it, you can add a pre-generated file to the root folder\nof your Laravel project (but this isn't as up-to-date as self generated files).")]),e._v(" "),a("ul",[a("li",[e._v("Generated version for Laravel 5: https://gist.github.com/barryvdh/5227822")]),e._v(" "),a("li",[e._v("Generated version for Lumen: https://gist.github.com/barryvdh/be17164b0ad51f832f20")]),e._v(" "),a("li",[e._v("Generated Phpstorm Meta file: https://gist.github.com/barryvdh/bb6ffc5d11e0a75dba67")])]),e._v(" "),a("p",[e._v("Note: You do need CodeComplice for Sublime Text: https://github.com/spectacles/CodeComplice")]),e._v(" "),a("h3",{attrs:{id:"automatic-phpdoc-generation-for-laravel-facades"}},[e._v("Automatic PHPDoc generation for Laravel Facades")]),e._v(" "),a("p",[e._v("You can now re-generate the docs yourself (for future updates)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:generate\n")])])]),a("p",[e._v("Note: "),a("code",[e._v("bootstrap/compiled.php")]),e._v(" has to be cleared first, so run "),a("code",[e._v("php artisan clear-compiled")]),e._v(" before generating.")]),e._v(" "),a("p",[e._v("You can configure your "),a("code",[e._v("composer.json")]),e._v(" to do this each time you update your dependencies:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"post-update-cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Illuminate\\\\Foundation\\\\ComposerScripts::postUpdate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@php artisan ide-helper:generate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@php artisan ide-helper:meta"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("You can also publish the config file to change implementations (ie. interface to specific class) or set defaults for "),a("code",[e._v("--helpers")]),e._v(" or "),a("code",[e._v("--sublime")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan vendor:publish --provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Barryvdh\\LaravelIdeHelper\\IdeHelperServiceProvider"')]),e._v(" --tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("config\n")])])]),a("p",[e._v("The generator tries to identify the real class, but if it cannot be found, you can define it in the config file.")]),e._v(" "),a("p",[e._v("Some classes need a working database connection. If you do not have a default working connection, some facades will not be included.\nYou can use an in-memory SQLite driver by adding the "),a("code",[e._v("-M")]),e._v(" option.")]),e._v(" "),a("p",[e._v("You can choose to include helper files. This is not enabled by default, but you can override it with the "),a("code",[e._v("--helpers (-H)")]),e._v(" option.\nThe "),a("code",[e._v("Illuminate/Support/helpers.php")]),e._v(" is already set up, but you can add/remove your own files in the config file.")]),e._v(" "),a("h3",{attrs:{id:"automatic-phpdocs-for-models"}},[e._v("Automatic PHPDocs for models")]),e._v(" "),a("p",[e._v("If you don't want to write your properties yourself, you can use the command "),a("code",[e._v("php artisan ide-helper:models")]),e._v(" to generate\nPHPDocs, based on table columns, relations and getters/setters.")]),e._v(" "),a("p",[e._v("By default, you are asked to overwrite or write to a separate file ("),a("code",[e._v("_ide_helper_models.php")]),e._v(").\nYou can write the comments directly to your Model file, using the "),a("code",[e._v("--write (-W)")]),e._v(" option, or\nforce to not write with "),a("code",[e._v("--nowrite (-N)")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Please make sure to back up your models, before writing the info.")])]),e._v(" "),a("p",[e._v("Writing to the models should keep the existing comments and only append new properties/methods.\nThe existing PHPDoc is replaced, or added if not found.\nWith the "),a("code",[e._v("--reset (-R)")]),e._v(" option, the existing PHPDocs are ignored, and only the newly found columns/relations are saved as PHPDocs.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:models Post\n")])])]),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * An Eloquent Model: 'Post'\n *\n * @property integer $id\n * @property integer $author_id\n * @property string $title\n * @property string $text\n * @property \\Illuminate\\Support\\Carbon $created_at\n * @property \\Illuminate\\Support\\Carbon $updated_at\n * @property-read \\User $author\n * @property-read \\Illuminate\\Database\\Eloquent\\Collection|\\Comment[] $comments\n */")]),e._v("\n")])])]),a("p",[e._v("By default, models in "),a("code",[e._v("app/models")]),e._v(" are scanned. The optional argument tells what models to use (also outside app/models).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:models Post User\n")])])]),a("p",[e._v("You can also scan a different directory, using the "),a("code",[e._v("--dir")]),e._v(" option (relative from the base path):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:models --dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path/to/models"')]),e._v(" --dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"app/src/Model"')]),e._v("\n")])])]),a("p",[e._v("You can publish the config file ("),a("code",[e._v("php artisan vendor:publish")]),e._v(") and set the default directories.")]),e._v(" "),a("p",[e._v("Models can be ignored using the "),a("code",[e._v("--ignore (-I)")]),e._v(" option")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:models --ignore"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Post,User"')]),e._v("\n")])])]),a("p",[e._v("Or can be ignored by setting the "),a("code",[e._v("ignored_models")]),e._v(" config")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'ignored_models'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    Post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    Api\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Note: With namespaces, wrap your model name in double-quotes ("),a("code",[e._v('"')]),e._v("): "),a("code",[e._v('php artisan ide-helper:models "API\\User"')]),e._v(", or escape the slashes ("),a("code",[e._v("Api\\\\User")]),e._v(").")])]),e._v(" "),a("p",[e._v("For properly recognition of "),a("code",[e._v("Model")]),e._v(" methods (i.e. "),a("code",[e._v("paginate")]),e._v(", "),a("code",[e._v("findOrFail")]),e._v(") you should extend "),a("code",[e._v("\\Eloquent")]),e._v(" or add")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** @mixin \\Eloquent */")]),e._v("\n")])])]),a("p",[e._v("for your model class.")]),e._v(" "),a("h3",{attrs:{id:"automatic-phpdocs-generation-for-laravel-fluent-methods"}},[e._v("Automatic PHPDocs generation for Laravel Fluent methods")]),e._v(" "),a("p",[e._v("If you need PHPDocs support for Fluent methods in migration, for example")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$table")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"somestring"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nullable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("After publishing vendor, simply change the "),a("code",[e._v("include_fluent")]),e._v(" line your "),a("code",[e._v("config/ide-helper.php")]),e._v(" file into:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'include_fluent'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("Then run "),a("code",[e._v("php artisan ide-helper:generate")]),e._v(", you will now see all Fluent methods recognized by your IDE.")]),e._v(" "),a("h3",{attrs:{id:"auto-completion-for-factory-builders"}},[e._v("Auto-completion for factory builders")]),e._v(" "),a("p",[e._v("If you would like the "),a("code",[e._v("factory()->create()")]),e._v(" and "),a("code",[e._v("factory()->make()")]),e._v(" methods to return the correct model class,\nyou can enable custom factory builders with the "),a("code",[e._v("include_factory_builders")]),e._v(" line your "),a("code",[e._v("config/ide-helper.php")]),e._v(" file.")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'include_factory_builders'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),a("p",[e._v("For this to work, you must also publish the PhpStorm Meta file (see below).")]),e._v(" "),a("h2",{attrs:{id:"phpstorm-meta-for-container-instances"}},[e._v("PhpStorm Meta for Container instances")]),e._v(" "),a("p",[e._v("It's possible to generate a PhpStorm meta file to "),a("a",{attrs:{href:"https://confluence.jetbrains.com/display/PhpStorm/PhpStorm+Advanced+Metadata",target:"_blank",rel:"noopener noreferrer"}},[e._v("add support for factory design pattern"),a("OutboundLink")],1),e._v(".\nFor Laravel, this means we can make PhpStorm understand what kind of object we are resolving from the IoC Container.\nFor example, "),a("code",[e._v("events")]),e._v(" will return an "),a("code",[e._v("Illuminate\\Events\\Dispatcher")]),e._v(" object,\nso with the meta file you can call "),a("code",[e._v("app('events')")]),e._v(" and it will autocomplete the Dispatcher methods.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan ide-helper:meta\n")])])]),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fire")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fire")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** @var \\Illuminate\\Foundation\\Application $app */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fire")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// When the key is not found, it uses the argument as class name")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'App\\SomeClass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Pre-generated example: https://gist.github.com/barryvdh/bb6ffc5d11e0a75dba67")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: You might need to restart PhpStorm and make sure "),a("code",[e._v(".phpstorm.meta.php")]),e._v(" is indexed.\nNote: When you receive a FatalException: class not found, check your config\n(for example, remove S3 as cloud driver when you don't have S3 configured. Remove Redis ServiceProvider when you don't use it).")])]),e._v(" "),a("h2",{attrs:{id:"usage-with-lumen"}},[e._v("Usage with Lumen")]),e._v(" "),a("p",[e._v("This package is focused on Laravel development, but it can also be used in Lumen with some workarounds.\nBecause Lumen works a little different, as it is like a bare bone version of Laravel and the main configuration\nparameters are instead located in "),a("code",[e._v("bootstrap/app.php")]),e._v(", some alterations must be made.")]),e._v(" "),a("h3",{attrs:{id:"enabling-facades"}},[e._v("Enabling Facades")]),e._v(" "),a("p",[e._v("While Laravel IDE Helper can generate automatically default Facades for code hinting,\nLumen doesn't come with Facades activated. If you plan in using them, you must enable\nthem under the "),a("code",[e._v("Create The Application")]),e._v(" section, uncommenting this line:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// $app->withFacades();")]),e._v("\n")])])]),a("p",[e._v("From there, you should be able to use the "),a("code",[e._v("create_alias()")]),e._v(" function to add additional Facades into your application.")]),e._v(" "),a("h3",{attrs:{id:"adding-the-service-provider"}},[e._v("Adding the Service Provider")]),e._v(" "),a("p",[e._v("You can install Laravel IDE Helper in "),a("code",[e._v("app/Providers/AppServiceProvider.php")]),e._v(",\nand uncommenting this line that registers the App Service Providers, so it can properly load.")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// $app->register(App\\Providers\\AppServiceProvider::class);")]),e._v("\n")])])]),a("p",[e._v("If you are not using that line, that is usually handy to manage gracefully multiple Laravel/Lumen installations,\nyou will have to add this line of code under the "),a("code",[e._v("Register Service Providers")]),e._v(" section of your "),a("code",[e._v("bootstrap/app.php")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!==")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Barryvdh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("LaravelIdeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("IdeHelperServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("After that, Laravel IDE Helper should work correctly. During the generation process,\nthe script may throw exceptions saying that some Class(s) doesn't exist or there are some undefined indexes.\nThis is normal, as Lumen has some default packages stripped away, like Cookies, Storage and Session.\nIf you plan to add these packages, you will have to add them manually and create additional Facades if needed.")]),e._v(" "),a("h3",{attrs:{id:"adding-additional-facades"}},[e._v("Adding Additional Facades")]),e._v(" "),a("p",[e._v("Currently, Lumen IDE Helper doesn't take into account additional Facades created under "),a("code",[e._v("bootstrap/app.php")]),e._v(" using "),a("code",[e._v("create_alias()")]),e._v(",\nso you need to create a "),a("code",[e._v("config/app.php")]),e._v(" file and add your custom aliases under an "),a("code",[e._v("aliases")]),e._v(" array again, like so:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'aliases'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'CustomAliasOne'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Example\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("CustomAliasOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'CustomAliasTwo'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Example\\"),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("Support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("CustomAliasTwo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//...")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("After you run "),a("code",[e._v("php artisan ide-helper:generate")]),e._v(", it's recommended (but not mandatory) to rename "),a("code",[e._v("config/app.php")]),e._v(" to something else,\nuntil you have to re-generate the docs or after passing to production environment.\nLumen 5.1+ will read this file for configuration parameters if it is present, and may overlap some configurations if it is completely populated.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[e._v("License")]),e._v(" "),a("p",[e._v("The Laravel IDE Helper Generator is open-sourced software licensed under the "),a("a",{attrs:{href:"http://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT license"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);