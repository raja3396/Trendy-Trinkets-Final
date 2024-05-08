package com.Ecommerce.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.Ecommerce.Service.UserDetailsServiceSecurityImp;
import com.Ecommerce.Service.SecurityClasses.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final UserDetailsServiceSecurityImp detailsServiceSecurityImp;

    
    
    

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,
			UserDetailsServiceSecurityImp detailsServiceSecurityImp) {
		super();
		this.jwtAuthFilter = jwtAuthFilter;
		this.detailsServiceSecurityImp = detailsServiceSecurityImp;
	}


	@Bean
     SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        
		return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        req->req.requestMatchers("/getProduct/**","/register/**","/login/**","/sellerRegister/**","/product/**","/addproduct/**","/getProductByCategory/**","/category/**","/sellerByCusomterId/**","/UserByCusomterId/**","/getsellerProducts/**","/seller/**")
                                .permitAll()
                                .requestMatchers("/admin_only/**").hasAuthority("ADMIN")
                                .anyRequest()
                                .authenticated()
                )
                .userDetailsService(detailsServiceSecurityImp)
                .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)).addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
		         .build();
    }
	

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


}
