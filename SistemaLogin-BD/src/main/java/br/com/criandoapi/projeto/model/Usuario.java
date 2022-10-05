package br.com.criandoapi.projeto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;


@Data

@Entity
@Table(name = "usuario")
public class Usuario {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id")
		private Integer id;
		
		@NotBlank(message = "O UserName é obrigatório!")
		@Size(min = 3, message = "O Username deve ter no mínino 3 caracteres")
		@Size(max = 12, message = "O Username deve ter no máximo 12 caracteres")
		@Column(name = "username", length = 12, nullable = false)
		private String username;
		
		@NotBlank(message = "A Senha é obrigatória!")
		@Column(name = "senha", columnDefinition = "TEXT", nullable = false)
		private String password;
}

