import type { SessionStorage } from "@remix-run/server-runtime";
import type { AuthenticateOptions, StrategyVerifyCallback } from "remix-auth";
import { Strategy } from "remix-auth";
/**
 * This interface declares what configuration the strategy needs from the
 * developer to correctly work.
 */
export interface OIDCStrategyOptions {
	something: "You may need";
}

/**
 * This interface declares what the developer will receive from the strategy
 * to verify the user identity in their system.
 */
export interface OIDCStrategyVerifyParams {
	something: "Dev may need";
}

export class OIDCStrategy<User> extends Strategy<
	User,
	OIDCStrategyVerifyParams
> {
	name = "change-me";

	constructor(
		options: OIDCStrategyOptions,
		verify: StrategyVerifyCallback<User, OIDCStrategyVerifyParams>,
	) {
		super(verify);
		// do something with the options here
	}

	async authenticate(
		request: Request,
		sessionStorage: SessionStorage,
		options: AuthenticateOptions,
	): Promise<User> {
		return await this.failure(
			"Implement me!",
			request,
			sessionStorage,
			options,
		);
		// Uncomment me to do a success response
		// this.success({} as User, request, sessionStorage, options);
	}
}
