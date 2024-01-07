CREATE TABLE `verificationToken` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`email`, `token`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `token` ON `verificationToken` (`token`);